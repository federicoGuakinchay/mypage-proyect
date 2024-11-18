from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions, status
from .models import BlogCategory

class ListCategoriesViews(APIView):
  permission_classes =(permissions.AllowAny,)

  def get(sef,request ,format=None):
    if BlogCategory.objects.all().exists(): 
      categories = BlogCategory.objects.all()

      result = []
      for category  in  categories:
        if not category.parent:
          item  = {}
          item['id'] = category.id
          item['name_es'] = category.name_es
          item['name_en'] = category.name_en
          item['slug'] = category.slug
          item['views'] = category.views
          
          item['sub_category']= []

          for sub_cat in  categories:
            sub_item = {}
            if sub_cat.parent and sub_cat.parent.id == category.id:
              sub_item['id'] =    sub_cat.id
              sub_item['name_es'] = sub_cat.name_es
              sub_item['name_en'] = sub_cat.name_en
              sub_item['slug'] =  sub_cat.slug
              sub_item['views'] = sub_cat.views
              sub_item['sub_category'] = []

              item['sub_category'].append(sub_item)
        if not (item in result ): 
          result.append(item)        
      print('result')
      print(result)
      return Response({'BlogCategories': result },status=status.HTTP_200_OK)
    else: 
      return Response({'error': 'No categories found'},status=status.HTTP_404_NOT_FOUND)