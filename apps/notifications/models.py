from django.db import models
from django.utils.timezone import now
from  django.conf  import settings 
from django.utils.translation import gettext_lazy as _
User = settings.AUTH_USER_MODEL

class Notification(models.Model):
    class Meta:
        verbose_name        = "Notification"
        verbose_name_plural = "Notifications"

    NOTIFICATION_TYPES = (
        ('project_published', 'Project Published'),
        ('project_updated', 'Project Updated'),
        ('comment', 'New Comment'),
        ('announcement', 'Announcement'),
        ('new_project', 'New Project'),
        ('LIMIT DATE', 'Limit Date'),
    )
    
    created_at        = models.DateTimeField(default=now)
    is_read           = models.BooleanField(default=False)
    title             = models.CharField(max_length=255)
    user              = models.ForeignKey(User, related_name='notifications', on_delete=models.CASCADE)
    message           = models.TextField()
    link              = models.URLField(_("Link"), max_length=200)
    notification_type = models.CharField(max_length=20, choices=NOTIFICATION_TYPES)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"Notification for {self.user}: {self.message}"
