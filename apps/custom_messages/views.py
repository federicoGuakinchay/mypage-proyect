from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions, status
from .models import Message
from .serializer import MessageSerializer, MessgeNotification
from .pagination import MediumSetPagination

class messagesNotification(APIView):
  permission_classes = [permissions.IsAuthenticated]
  def get(self, request):
    messages = Message.objects.all()
    if messages.exists(): 
      paginator = MediumSetPagination()
      result = paginator.paginate_queryset(messages, request)
      serializer = MessgeNotification(result, many=True)
      return Response({'messages list': serializer.data}, status=status.HTTP_200_OK)
    else:
      return Response({'messages list': 'you don`t have any message'})

class messagesdetail(APIView): 
  permission_classes = [permissions.IsAuthenticated]
  def get(self, request, pk):
    message = Message.objects.get(pk=pk)
    if message.exist(): 
      serializer = MessageSerializer(message)
      return Response({'message': serializer.data}, status=status.HTTP_200_OK)
    else: 
      return Response({'message': 'message not found'}, status=status.HTTP_404_NOT_FOUND)