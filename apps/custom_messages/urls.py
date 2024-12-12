from django.urls import path 
from .views import *

urlpatterns = [
  path('messages',messagesNotification.as_view()),
  path('message/<pk>',messagesdetail.as_view()), 
]