from rest_framework import serializers
from .models import *

# convert the info to JSON 
class ProjectsCategorySerializer(serializers.ModelSerializer):
  class Meta:
    model = ProjectsCategory
    fields=[
      'id',
      'name_en',
      'name_es',
      'slug',
      'views',
    ]

class LanguagesCategorySerializer(serializers.ModelSerializer):
  class Meta:
    model = Language
    fields=[
      'id',
      'name',
      'views',
    ]