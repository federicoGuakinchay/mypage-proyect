from rest_framework import viewsets, permissions, status
from rest_framework.response import Response
from .serializers import UserSettingsSerializer
from .models import UserSettings
from rest_framework.decorators import action

class UserSettingsViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated]  # Applies to all actions by default
    serializer_class = UserSettingsSerializer

    def get_queryset(self):
        # Only return the authenticated user's settings
        return UserSettings.objects.filter(user=self.request.user)

    def update(self, request, *args, **kwargs):
        # Custom update logic to add a success message
        partial = kwargs.pop('partial', False)
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=partial)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)
        return Response(
            {'message': 'Settings updated successfully', 'data': serializer.data},
            status=status.HTTP_200_OK
        )

    # Custom action for admin to view all user settings
    @action(detail=False, methods=['get'], permission_classes=[permissions.IsAdminUser])
    def all_user_settings(self, request):
        queryset = UserSettings.objects.all()
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
