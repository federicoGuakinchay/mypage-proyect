from rest_framework import serializers
from .models import *
from apps.blog_categories.serialazer import BlogCategorySerializer
from ..users.serializers import UserSerializerBlog
# convert the info to JSON 
class PostSerializer(serializers.ModelSerializer):
  category = BlogCategorySerializer()
  author = UserSerializerBlog()
  class Meta:
    model = Post
    fields = ['id', 
              'title', 'title_en', 'title_es', 
              'description', 'description_en', 'description_es', 
              'content', 'content_en', 'content_es',
              'slug', 
              'thumbnail', 
              'status', 
              'published', 
              'updated',
              'views', 
              'category',
              'author'
    ]

class PostListSerializer(serializers.ModelSerializer):
  category = BlogCategorySerializer() 
  author = UserSerializerBlog()
  class Meta:
    model = Post
    fields=[
      'id',
      'title', 'title_en', 'title_es', 
      'description', 'description_en', 'description_es', 
      'slug',
      'views',
      'thumbnail',
      'published',
      'updated',
      'views',
      'category',
      'author'
    ]