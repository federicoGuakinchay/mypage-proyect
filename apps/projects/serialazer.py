from rest_framework import serializers
from .models import *
from apps.projects_categories.serialazer import ProjectsCategorySerializer , LanguagesCategorySerializer
from ..users.serializers import UserCardSerializer_small
# convert the info to JSON 

class CommentProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = CommentProject
        fields = ['id', 'post', 'author', 'content', 'created_at', ]
        read_only_fields = ['id', 'created_at', 'author']

class ProjectsSerializer(serializers.ModelSerializer):
  categories = ProjectsCategorySerializer(many=True)
  languages = LanguagesCategorySerializer(many=True)
  author = UserCardSerializer_small()
  class Meta:
    model = Project
    fields = [
      'id', 
      'title',
      'content', 'content_en', 'content_es',
      'thumbnail', 
      'status', 
      'published', 
      'updated',
      'views', 
      'categories',
      'languages',
      'author',
    ]