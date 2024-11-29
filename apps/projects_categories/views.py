from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions, status
from .models import ProjectsCategory , Language

class ListCategoriesViews(APIView):
  permission_classes =(permissions.AllowAny,)

  def get(sef,request ,format=None):
    categories = ProjectsCategory.objects.all()
    if categories.exists(): 
      result = []
      for category  in  categories:
          item  = {}
          item['id'] = category.id
          item['name_es'] = category.name_es
          item['name_en'] = category.name_en
          item['slug'] = category.slug
          item['views'] = category.views
          result.append(item)        
      print('result')
      print(result)
      return Response({'ProjectsCategories': result },status=status.HTTP_200_OK)
    else: 
      return Response({'error': 'No categories found'},status=status.HTTP_404_NOT_FOUND)
    
class ListLanguageViews(APIView):
  permission_classes =(permissions.AllowAny,)

  def get(sef,request ,format=None):
    languages = Language.objects.all()
    if languages.exists(): 

      result = []
      for language  in  languages:
          item  = {}
          item['id'] = language.id
          item['name'] = language.name
          item['views'] = language.views
          result.append(item)        
      print('result')
      print(result)
      return Response({'Languages': result },status=status.HTTP_200_OK)
    else: 
      return Response({'error': 'No categories found'},status=status.HTTP_404_NOT_FOUND)