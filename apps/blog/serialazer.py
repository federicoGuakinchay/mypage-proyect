from rest_framework import serializers
from .models import *
from apps.blog_categories.serialazer import BlogCategorySerializer

# convert the info to JSON 
class PostSerializer(serializers.ModelSerializer):
  category = BlogCategorySerializer()
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
              'views', 
              'category'
    ]

class PostListSerializer(serializers.ModelSerializer):
  category = BlogCategorySerializer() 
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
      'views',
      'category'
    ]