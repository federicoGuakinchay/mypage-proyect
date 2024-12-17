from rest_framework import serializers
from .models import UserAccount,UserSettings
from apps.blog_categories.serialazer import BlogCategorySerializer
from djoser.serializers import UserCreateSerializer

# convert the info to JSON 
class UserAccountSerializer(serializers.ModelSerializer):

    class Meta:
        model = UserAccount
        fields = ['email', 'first_name', 'last_name', 'picture', 'slug','role']

class UserSerializer(UserCreateSerializer):
  class Meta(UserCreateSerializer.Meta):
    model = UserAccount
    fields = ['id','first_name', 'last_name' ,'slug','picture','description_en','description_es','created_at','updated_at','email','is_active','role']



class UserSerializerBlog(UserCreateSerializer):
  class Meta(UserCreateSerializer.Meta):
    model = UserAccount
    fields = ['id','first_name', 'last_name','picture','slug','description_en', 'description_es' ,'email']


class UserListSerializer(serializers.ModelSerializer): 
  class Meta(UserCreateSerializer.Meta):
    model = UserAccount
    fields = ['id','first_name', 'last_name','slug','picture','created_at','updated_at','email']


class CustomUserSerializer(serializers.ModelSerializer):
    full_name = serializers.SerializerMethodField()

    class Meta:
        model = UserAccount
        fields = ['id', 'email', 'first_name', 'last_name', 'full_name', 'picture']

    def get_full_name(self, obj):
        print('ful name  here : ')
        return f"{obj.first_name} {obj.last_name}"
    
class UserSettingsSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserSettings
        fields = '__all__' 