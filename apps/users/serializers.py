from rest_framework import serializers
from .models import UserAccount,UserSettings , Nationality , Speciality
from apps.blog_categories.serialazer import BlogCategorySerializer
from djoser.serializers import UserCreateSerializer


# user Account Serializer to swow to the visitors to the main page 
class UserAccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserAccount
        fields = ['id','first_name', 'last_name' ,'slug','picture','description_en','description_es','created_at','updated_at','linkedin','phone','other_contact','email','nationality',]
        read_only_fields = '__all__' 

# User Card this info is for the card to send you to the user info page  
# for  3 sizes
#for  small size
class UserCardSerializer_small(serializers.ModelSerializer):
    class Meta:
        model = UserAccount
        fields = ['id','first_name', 'last_name' ,'slug','picture',] 
        read_only_fields=['__all__']
# for  Mediun  and  large  size 
class UserCardSerializer_complete(serializers.ModelSerializer):
    class Meta:
        model = UserAccount
        fields = ['id','first_name', 'last_name' ,'slug','picture','linkedin','phone','email','description_en','description_es'] 
        read_only_fields=['__all__']


#User Settings dashboard (PREFERENCES TO THE USERS SETTINGS SERIALIZER)
class UserSettingsSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserSettings
        fields = '__all__' 

# User serializer for the dashboard
class UserSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = UserAccount
        fields = '__all__'
        read_only_fields=['id','slug']


class NationalitySerializer(serializers.ModelSerializer):
    class Meta:
        model =Nationality
        fields = '__all__'
        read_only_fields='__all__'

class SpecialitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Speciality
        fields = '__all__'
        read_only_fields='__all__'