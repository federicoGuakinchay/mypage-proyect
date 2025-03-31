from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions, status
from .models import Notification
from .serializer import NotificationSerializer
from ..pagintion import  SmallSetPagination

class NotificationListView(APIView):
    permission_classes = [permissions.IsAuthenticated]
    def get(self, request):
        notifications = Notification.objects.filter(user=request.user).order_by('-created_at')
        if notifications.exist():
            paginator = SmallSetPagination()
            result = paginator.paginate_queryset(notifications, request)
            serializer = NotificationSerializer(result, many=True)
            return Response({"Notification": serializer.data},   status=status.HTTP_200_OK)
        else:
            return Response({"Notification": "No notifications"},status=status.HTTP_404_NOT_FOUND)

class MarkNotificationRead(APIView):
    permission_classes = [permissions.IsAuthenticated]
    def post(self, request, pk):
        try:
            notification = Notification.objects.get(pk=pk, user=request.user)
            serializer = NotificationSerializer(notification)
            notification.is_read = True
            notification.save()
            return Response({'detail': serializer.data})
        except Notification.DoesNotExist:
            return Response({'detail': 'Notification not found.'}, status=404)