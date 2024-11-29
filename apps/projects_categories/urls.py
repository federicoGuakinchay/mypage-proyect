from django.urls import path 
from .views import ListCategoriesViews ,ListLanguageViews

urlpatterns = [
    path('categories_list',ListCategoriesViews.as_view()),
    path('languages_list',ListLanguageViews.as_view()),
]