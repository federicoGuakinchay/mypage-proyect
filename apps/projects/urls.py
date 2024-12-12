from django.urls import path 
from .views import *

urlpatterns = [
  path('list',ProjectListViews.as_view()),
  path('list_by_category',ListProjectsByCategoryViews.as_view()),
  path('detail/<slug>',ProjectDetailView.as_view()),
  path('search',searchProjectView.as_view()),
  path('author/<slug>', AuthorProjectListViewsShow.as_view()),

  # Dashboard  view  (my blog list)
  path('author_list', AuthorProjectListViewsShow.as_view()),
  path('author_list/', AuthorProjectListViewsShow.as_view(), name='author_list'),
]