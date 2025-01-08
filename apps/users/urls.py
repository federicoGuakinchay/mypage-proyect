from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UserSettingsViewSet

# Create a router and register the UserSettingsViewSet
router = DefaultRouter()
router.register(r'user-settings', UserSettingsViewSet, basename='user-settings')

urlpatterns = [
    # Include the router URLs
    path('', include(router.urls)),
]
#   GET /user-settings/ - List all user settings (filtered to the authenticated user by default).
#   POST /user-settings/ - Create new user settings.
#   GET /user-settings/<id>/ - Retrieve a specific user settings record.
#   PUT /user-settings/<id>/ - Update a specific user settings record.
#   PATCH /user-settings/<id>/ - Partially update a specific user settings record.
#   DELETE /user-settings/<id>/ - Delete a specific user settings record.