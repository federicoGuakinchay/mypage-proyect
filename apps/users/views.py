from rest_framework import viewsets, permissions, status
from rest_framework.response import Response
from .serializers import UserSettingsSerializer , NationalitySerializer , SpecialitySerializer
from .models import UserSettings , Nationality,Speciality
from rest_framework.decorators import action
from rest_framework.exceptions import NotFound

class UserSettingsViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated]  # Applies to all actions by default
    serializer_class = UserSettingsSerializer

    def get_queryset(self):
        # Only return the authenticated user's settings
        user =self.request.user
        queryset = UserSettings.objects.filter(user=user)
        print(f"Authenticated user: {user}, User settings count: {queryset.count()}")
        return queryset
    
    def get_object(self):
        instance = self.get_queryset().first()
        if not instance:
            raise NotFound('User settings do not exist. Please create them first.')
        return instance
    
    def update(self, request, *args, **kwargs):    
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
    

'''view of  Nationalities added only  super users '''
class NationalityViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAdminUser]
    serializer_class = NationalitySerializer
    def get_queryset(self):
        """ Return all nationalities. The API view will handle serialization. """
        return Nationality.objects.all()

    def perform_create(self, serializer):
        """ Save new nationality (handled by DRF) """
        serializer.save()

    def perform_destroy(self, instance):
        """ Delete nationality safely (handled by DRF) """
        super().perform_destroy(instance)
    
'''view of  Specialities added only  super users '''
class SpecialityViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAdminUser]
    serializer_class = SpecialitySerializer
    def get_queryset(self):
        """ Return all Specialities. The API view will handle serialization. """
        return Speciality.objects.all()

    def perform_create(self, serializer):
        """ Save new Speciality (handled by DRF) """
        serializer.save()

    def perform_destroy(self, instance):
        """ Delete Speciality safely (handled by DRF) """
        super().perform_destroy(instance)