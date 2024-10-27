from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions, status
from .models import Post,ViewCount
from apps.blog_categories.models import BlogCategory
from django.db.models import Q

from .serialazer import PostSerializer , PostListSerializer
from .pagination import SmallSetPagination ,MediumSetPagination, BigSetPagination

class BlogListViews(APIView):
  permission_classes = [permissions.AllowAny]
  def get(self,request,format=None):
    posts = Post.postobjects.order_by('-published').all()
    if posts.exists():
      paginator = SmallSetPagination()
      result = paginator.paginate_queryset(posts, request)
      serializer = PostListSerializer(result, many=True)
      return paginator.get_paginated_response({'posts':serializer.data})
    else:
      return Response({"detail": "No posts found."}, status=status.HTTP_404_NOT_FOUND)
    

class ListPostsByCategoryViews(APIView):
  permission_classes = [permissions.AllowAny]
  def get(self,request,format=None):
    slug = request.query_params.get('slug')
    category = BlogCategory.objects.get(slug=slug)

    posts = Post.postobjects.order_by('-published').all()
    
    if category.parent:
      posts = posts.filter(category=category)
    else:
      if not BlogCategory.objects.filter(parent=category).exists():
        posts = posts.filter(category=category)
      else:
        sub_categories = BlogCategory.objects.filter(parent=category)
        filtered_categories = [category]

        for cat in sub_categories:
          filtered_categories.append(cat)
        filtered_categories = tuple(filtered_categories)
        posts = posts.filter(category__in=filtered_categories)

    if posts.exists():
      paginator = SmallSetPagination()
      result = paginator.paginate_queryset(posts, request)
      serializer = PostListSerializer(result, many=True)
      return paginator.get_paginated_response({'posts':serializer.data})
    else:
      return Response({"detail": "No posts found."}, status=status.HTTP_404_NOT_FOUND)
    

class PostDetailView(APIView):
    permission_classes = [permissions.AllowAny]

    def get(self, request, slug, format=None):
        if Post.postobjects.filter(slug=slug).exists():
            post = Post.postobjects.get(slug=slug)
            serializer = PostListSerializer(post)
            
            # Get the client IP address
            Address = request.META.get('HTTP_X_FORWARDED_FOR')
            if Address:
                ip = Address.split(',')[-1].strip()
            else:
                ip = request.META.get('REMOTE_ADDR')

            # Check if the view has already been counted for this IP address
            if not ViewCount.objects.filter(post=post, ip_address=ip).exists():
                # Create a new view count entry
                view = ViewCount(post=post, ip_address=ip)
                view.save()

                # Increment the post's view count
                post.views += 1
                print(post.views)
                post.save()
            return Response({'post': serializer.data}, status=status.HTTP_200_OK)
        else:
            return Response({"detail": "No posts found."}, status=status.HTTP_404_NOT_FOUND)
        
class searchBlogView(APIView):
  permission_classes = [permissions.AllowAny]
  def get(self, request,format=None):
    search_request = request.query_params.get('search', '').strip()  # Default to an empty string if no search query
    
    # Check if the search query is empty or None
    if not search_request:
      return Response({"detail": "No search query provided."}, status=status.HTTP_400_BAD_REQUEST)

    matches = Post.postobjects.filter(
      Q(title__contains=search_request) |
      Q(content__contains=search_request) |
      Q(category__name__contains=search_request) |
      Q(description__contains=search_request)
      )
    paginator = BigSetPagination()
    results = paginator.paginate_queryset(matches, request)
    serializer = PostListSerializer(results, many=True)
    return paginator.get_paginated_response({'posts':serializer.data})