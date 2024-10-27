from rest_framework.pagination import PageNumberPagination

class SmallSetPagination(PageNumberPagination):
  page_query_param ='p'
  page_size = 6
  page_size_query_param = 'page_size'
  max_page_size = 6
  
class MediumSetPagination(PageNumberPagination):
  page_query_param ='p'
  page_size = 10
  page_size_query_param = 'page_size'
  max_page_size = 10

class BigSetPagination(PageNumberPagination):
  page_query_param ='p'
  page_size = 20
  page_size_query_param = 'page_size'
  max_page_size = 20