from rest_framework import serializers
from .models import UserAccount
from apps.blog_categories.serialazer import BlogCategorySerializer
from djoser.serializers import UserCreateSerializer

# convert the info to JSON 
class UserAccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserAccount
        fields = ['email', 'password', 'first_name', 'last_name', 'alias']
class UserSerializer(UserCreateSerializer):
  class Meta(UserCreateSerializer.Meta):
    model = UserAccount
    fields = ['id','fiers_name', 'Last_name' ,'alias','picture','bio' ,'created_at','updated_at','mail','is_active','is_editor','is_admin' , 'is_active','is_staff']

class UserListSerializer(serializers.ModelSerializer): 
  class Meta(UserCreateSerializer.Meta):
    model = UserAccount
    fields = ['id','fiers_name', 'Last_name','alias','picture','created_at','updated_at','mail']