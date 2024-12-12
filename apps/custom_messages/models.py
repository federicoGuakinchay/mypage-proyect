from django.db import models
from django.conf import settings
from django_quill.fields import QuillField
user= settings.AUTH_USER_MODEL

class Message(models.Model):
    sender     = models.ForeignKey(user, related_name="sent_messages", on_delete=models.CASCADE)
    receiver   = models.ForeignKey(user, related_name="received_messages", on_delete=models.CASCADE)
    subject    = models.CharField(max_length=255, blank=True, null=True)
    body       = QuillField(null=True, blank=True)
    is_read    = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    attachment = models.FileField(upload_to="message_attachments/", blank=True, null=True)

    class Meta:
        verbose_name = "Message"
        verbose_name_plural = "Messages"
        ordering = ["-created_at"]

    def __str__(self):
        return f"Message from {self.sender} to {self.receiver}"

    def mark_as_read(self):
        """Mark the message as read."""
        self.is_read = True
        self.save()