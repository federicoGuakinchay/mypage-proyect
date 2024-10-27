from django.urls import path 
from .views import ListCategoriesViews

urlpatterns = [
    path('list',ListCategoriesViews.as_view())
]