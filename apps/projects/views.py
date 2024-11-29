from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions, status
from .models import Project , ViewCount
from apps.projects_categories.models import ProjectsCategory , Language
from django.db.models import Q

from .serialazer import ProjectsSerializer
from .pagination import SmallSetPagination ,MediumSetPagination, BigSetPagination

class ProjectListViews(APIView):
  permission_classes = [permissions.AllowAny]
  def get(self,request,format=None):
    Projects      = Project.projectobjects.order_by('-published').all()
    if Projects.exists():
      paginator   =  SmallSetPagination()
      result      =  paginator.paginate_queryset(Projects, request)
      serializer  =  ProjectsSerializer(result, many=True)
      return paginator.get_paginated_response({'Projects':serializer.data})
    else:
      return Response({"detail": "No Projects found."}, status=status.HTTP_404_NOT_FOUND)
    

class ListProjectsByCategoryViews(APIView):
  permission_classes = [permissions.AllowAny]
  def get(self, request, format=None):
    slug = request.query_params.get('slug1')
    lang = request.query_params.get('slug2')
    try:
        category = ProjectsCategory.objects.get(slug=slug)
    except ProjectsCategory.DoesNotExist:
        return Response({"detail": "Category not found."}, status=status.HTTP_404_NOT_FOUND)

    try:
        projectlang = Language.objects.get(slug=lang)
    except Language.DoesNotExist:
        return Response({"detail": "Language not found."}, status=status.HTTP_404_NOT_FOUND)

    projects = Project.projectobjects.filter(category=category,languages=projectlang).order_by('-published')

    if projects.exists():
        paginator = SmallSetPagination()
        result = paginator.paginate_queryset(projects, request)
        serializer = ProjectsSerializer(result, many=True)
        return paginator.get_paginated_response({'Projects': serializer.data})
    else:
        return Response({"detail": "No projects found."}, status=status.HTTP_404_NOT_FOUND)
    

class ProjectDetailView(APIView):
    permission_classes = [permissions.AllowAny]

    def get(self, request, slug, format=None):
        if Project.projectobjects.filter(slug=slug).exists():
            Project = Project.projectobjects.get(slug=slug)
            serializer = ProjectsSerializer(Project)

            Address = request.META.get('HTTP_X_FORWARDED_FOR')
            if Address:
                ip = Address.split(',')[-1].strip()
            else:
                ip = request.META.get('REMOTE_ADDR')

            if not ViewCount.objects.filter(Project=Project, ip_address=ip).exists():
                view = ViewCount(Project=Project, ip_address=ip)
                view.save()
                Project.views += 1
                Project.save()
            print(serializer.data)
            return Response({'Project': serializer.data}, status=status.HTTP_200_OK)
        else:
            return Response({"detail": "No Projects found."}, status=status.HTTP_404_NOT_FOUND)
        
class searchProjectView(APIView):
  permission_classes = [permissions.AllowAny]
  def get(self, request,format=None):
    search_request = request.query_params.get('search', '').strip()  
    if not search_request:
      return Response({"detail": "No search query provided."}, status=status.HTTP_400_BAD_REQUEST)

    matches = Project.projectobjects.filter(
      Q(title__contains=search_request) |
      Q(content__contains=search_request) |
      Q(category__name__contains=search_request) |
      Q(languages__contains=search_request)
      )
    paginator  = BigSetPagination()
    results    = paginator.paginate_queryset(matches, request)
    serializer = ProjectsSerializer(results, many=True)
    return paginator.get_paginated_response({'Projects':serializer.data})
  


class AuthorProjectListViewsModify(APIView):
  permission_classes = [permissions.IsAuthenticated]
  def get(self,request,format=None):
    user         = self.request.user
    Projects     = Project.projectobjects.filter(author=user).all().order_by('-published')
    if Projects.exists():
      paginator  = SmallSetPagination()
      result     = paginator.paginate_queryset(Projects, request)
      serializer = ProjectsSerializer(result, many=True)
      return paginator.get_paginated_response({'Projects':serializer.data})
    else:
      print('don´t exist any Project here ')
      return Response({"detail": "No Projects found."}, status=status.HTTP_404_NOT_FOUND)

class AuthorProjectListViewsShow(APIView):
  permission_classes = [permissions.AllowAny]
  def get(self,request,slug,format=None):
    Projects = Project.projectobjects.filter(author__slug=slug).all().order_by('-published')
    if Projects.exists():
      paginator  = SmallSetPagination()
      result     = paginator.paginate_queryset(Projects, request)
      serializer = ProjectsSerializer(result, many=True)
      return paginator.get_paginated_response({'Projects':serializer.data})
    else:
      print('don´t exist any Project here ')
      return Response({"detail": "No Projects found."}, status=status.HTTP_404_NOT_FOUND)