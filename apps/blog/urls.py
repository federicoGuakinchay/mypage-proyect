from django.urls import path 
from .views import BlogListViews, ListPostsByCategoryViews , PostDetailView,searchBlogView

urlpatterns = [
  path('list',BlogListViews.as_view()),
  path('list_by_category',ListPostsByCategoryViews.as_view()),
  path('detail/<slug>',PostDetailView.as_view()),
  path('search',searchBlogView.as_view())
]