from .models import Message

class MessageSerializer: 
  class Meta:
    model = Message
    fields = ('__all__')


class MessgeNotification:
  class Meta:
    model = Message
    fields = ('id', 'text', 'author', 'created_at')