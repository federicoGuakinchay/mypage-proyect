from rest_framework import viewsets, permissions, status
from rest_framework.response import Response
from .serializers import UserSettingsSerializer
from .models import UserSettings
from rest_framework.decorators import action
from rest_framework.exceptions import NotFound

class UserSettingsViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated]  # Applies to all actions by default
    serializer_class = UserSettingsSerializer

    def get_queryset(self):
        # Only return the authenticated user's settings
        print("Authenticated user:", self.request.user)
        queryset = UserSettings.objects.filter(user=self.request.user)
        print("Queryset for user:", queryset)
        return queryset
    
    def get_object(self):
        queryset = self.get_queryset()
        instance = queryset.first()
        if not instance:
            raise NotFound('User settings not found for the authenticated user.')
        return instance
    
    def update(self, request, *args, **kwargs):
        # Custom update logic to add a success message
        print('hello world')
        print('self:', self)
    
        # Extract the partial parameter (if any)
        partial = kwargs.pop('partial', False)

        # Retrieve the instance being updated
        instance = self.get_object()
        print('instance:', instance)
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
        if not queryset.exists():
            return Response({'message': 'No user settings found'}, status=status.HTTP_404_NOT_FOUND)
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
