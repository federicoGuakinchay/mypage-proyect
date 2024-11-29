from rest_framework import serializers
from .models import UserAccount
from apps.blog_categories.serialazer import BlogCategorySerializer
from djoser.serializers import UserCreateSerializer

# convert the info to JSON 
class UserAccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserAccount
        fields = ['email', 'password', 'first_name', 'last_name', 'slug']
class UserSerializer(UserCreateSerializer):
  class Meta(UserCreateSerializer.Meta):
    model = UserAccount
    fields = ['id','first_name', 'last_name' ,'slug','picture','description_en','description_es','created_at','updated_at','email','is_active','is_editor','is_admin' , 'is_superuser','is_staff']



class UserSerializerBlog(UserCreateSerializer):
  class Meta(UserCreateSerializer.Meta):
    model = UserAccount
    fields = ['id','first_name', 'last_name','picture','slug','description_en', 'description_es' ,'email']


class UserListSerializer(serializers.ModelSerializer): 
  class Meta(UserCreateSerializer.Meta):
    model = UserAccount
    fields = ['id','first_name', 'last_name','slug','picture','created_at','updated_at','email']