from django.urls import path 
from .views import *

urlpatterns = [
  path('list',BlogListViews.as_view()),
  path('list_by_category',ListPostsByCategoryViews.as_view()),
  path('detail/<slug>',PostDetailView.as_view()),
  path('search',searchBlogView.as_view()),
  path('author/<slug>', AuthorBlogListViewsShow.as_view()),

  # Dashboard  view  (my blog list)
  path('author_list', AuthorBlogListViewsModify.as_view()),
  path('author_list/', AuthorBlogListViewsModify.as_view(), name='author_list'),
]