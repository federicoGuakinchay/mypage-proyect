from rest_framework import serializers
from .models import *

# convert the info to JSON 
class BlogCategorySerializer(serializers.ModelSerializer):
  class Meta:
    model = BlogCategory
    fields=[
      'id',
      'name',
      'slug',
      'views'
    ]