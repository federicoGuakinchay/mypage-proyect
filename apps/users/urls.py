from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import UserSettingsViewSet

router = DefaultRouter()
router.register(r'user-settings', UserSettingsViewSet, basename='user-settings')

urlpatterns = [
    # Include all routes registered with the router
    *router.urls
]
#   GET /user-settings/ (Authenticated user settings list)
#   PUT /user-settings/<id>/ (Update a user's settings)
#   GET /user-settings/all_user_settings/ (Admin-only access to all settings)