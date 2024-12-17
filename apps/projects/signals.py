from .models import Project , CommentProject
from ..notifications.models import Notification
from django.db.models.signals import post_save, pre_save, post_delete
from django.dispatch import receiver
from django.contrib.auth.models import User
from django.contrib.auth import get_user_model
from django.core.mail import send_mail  # For email notifications
from  ..users.models import UserAccount , UserSettings
User = UserAccount

@receiver(post_save, sender=Project)
def project_notification(sender, instance, created, **kwargs):
    if created:
        # Notify all users except the author
        users = User.objects.exclude(id=instance.author.id)
        for user in users:
            Notification.objects.create(
                user=user,
                title=f"A new project has been published.",
                message=f"'{instance.author.first_name} {instance.author.last_name}' has  publised a new  proyect '{instance.title}'",
                notification_type='project_published',
                link=f"proyects/{instance.title}",
            )
        # Email notifications for users with email_notifications=True
        users_with_email_notifications = UserSettings.objects.filter(
            user__in=users, email_notifications=True
        )
        for setting in users_with_email_notifications:
            send_mail(
                "A new project has been published.",
                (
                    f"'{instance.author.first_name} {instance.author.last_name}' "
                    f"has published a new project '{instance.title}'."
                ),
                'your_email@gmail.com',  # Replace with page email
                [setting.user.email],
            )
    else:
        # Notify all users about the project update
        users = User.objects.exclude(id=instance.author.id)
        for user in users:
            Notification.objects.create(
                user=user,
                title=f"A new project has been updated.",
                message=f"'{instance.author.first_name} {instance.author.last_name}' has  updated his  proyect '{instance.title}'",
                notification_type='project_published',
                link=f"proyects/{instance.title}",
            )
        # Email notifications for users with email_notifications=True
        users_with_email_notifications = UserSettings.objects.filter(
            user__in=users, email_notifications=True
        )
        for setting in users_with_email_notifications:
            send_mail(
                "A new project has been updated.",
                (
                    f"'{instance.author.first_name} {instance.author.last_name}' "
                    f"has updated a new project '{instance.title}'."
                ),
                'your_email@gmail.com',  # Replace with page email
                [setting.user.email],
            )

@receiver(post_save, sender=CommentProject)
def comment_notification(sender, instance, created, **kwargs):
    if created:
        # Notify the project author about the new comment
        Notification.objects.create(
            user=instance.project.author,
            title=f"Your Project has a new comment.",
            message=(
                f"Your project '{instance.project.title}' "
                f"has a new comment from {instance.author}. {instance.content or 'No content provided.'}"
            ),
            notification_type='comment',
            link=f"comments /{instance.project.title}",  
        )
        # Email notifications for users with email_notifications=True
        email_notification = UserSettings.objects.filter(
            user=instance.project.author, email_notifications=True
        )
        if email_notification.exists():
            send_mail(
                "A new project a new comment.",
                (
                    f"Your project '{instance.project.title}' "
                    f"has a new comment from {instance.author}. {instance.content or 'No content provided.'}"
                ),
                'your_email@gmail.com',  # Replace with page email
                [instance.project.author.email],
            )

@receiver(post_delete, sender=Project)
def Delete_project_notification(sender, instance, **kwargs):
    # Notify all users except the author
    users = User.objects.exclude(id=instance.author.id)
    for user in users:
        Notification.objects.create(
            user=user,
            title=f"A project has been deleted.",
            message=f"'{instance.author.first_name} {instance.author.last_name}' has  deleted his project '{instance.title}'",
            notification_type='project_deleted',
            link="proyects",
        )
    # Email notifications for users with email_notifications=True
        users_with_email_notifications = UserSettings.objects.filter(
            user__in=users, email_notifications=True
        )
        for setting in users_with_email_notifications:
            send_mail(
                "A new project has been updated.",
                (
                    f"'{instance.author.first_name} {instance.author.last_name}' "
                    f"has updated a new project '{instance.title}'."
                ),
                'your_email@gmail.com',  # Replace with page email
                [setting.user.email],
            )