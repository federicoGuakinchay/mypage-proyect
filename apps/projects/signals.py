from .models import Project , CommentProject
from ..notifications.models import Notification
from django.db.models.signals import post_save, pre_save, post_delete
from django.dispatch import receiver
from django.contrib.auth.models import User
from django.core.mail import send_mail  # Example for email notifications
from django.conf import settings

User = settings.AUTH_USER_MODEL

@receiver(post_save, sender=Project)
def project_notification(sender, instance, created, **kwargs):
    if created:
        # Notify all users except the author
        users = User.objects.exclude(id=instance.author.id)
        for user in users:
            Notification.objects.create(
                user=user,
                message=f"A new project '{instance.title}' has been published.",
                notification_type='project_published',
                project=instance
            )
    else:
        # Notify all users about the project update
        users = User.objects.exclude(id=instance.author.id)
        for user in users:
            Notification.objects.create(
                user=user,
                message=f"The project '{instance.title}' has been updated.",
                notification_type='project_updated',
                project=instance
            )

@receiver(post_save, sender=CommentProject)
def comment_notification(sender, instance, created, **kwargs):
    if created:
        # Notify the project author about the new comment
        Notification.objects.create(
            user=instance.project.author,
            message=f"Your project '{instance.project.title}' has a new comment from {instance.author}.",
            notification_type='comment',
            project=instance.project
        )