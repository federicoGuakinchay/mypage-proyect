from django.urls import path
from .views import NotificationListView,MarkNotificationRead

urlpatterns = [path('notifications/', NotificationListView.as_view(), name='notification-list'),]