from .models import UserAccount , UserSettings
from ..notifications.models import Notification
from django.db.models.signals import post_save, pre_save, post_delete
from django.dispatch import receiver
from django.contrib.auth.models import User
from django.contrib.auth import get_user_model
from django.core.mail import send_mail  # For email notifications

User = get_user_model()

@receiver(post_save, sender=UserAccount)
def new_user_notification(sender, instance, created, **kwargs):
    if created:
        UserSettings.objects.create(user=instance)
        users = User.objects.exclude(id=instance.author.id)
        for user in users:
            if  user.is_staff == True or user.is_superuser:
                Notification.objects.create(
                    user=user, 
                    title='New User Registered',
                    message=f'{instance.author.username} has registered a new user {instance.username}.',
                    notification_type='add_user',
                    link=f"user/{instance.slug}",
                )
    else:
        users = User.objects.exclude(id=instance.author.id)
        for user in users:
            if  user.is_staff == True or user.is_superuser:
                Notification.objects.create(
                    user=user,
                    title='User Updated',
                    message=f'{instance.author.username} has updated user {instance.username}.',
                    notification_type='update_user',
                    link=f"user/{instance.slug}",
            )

@receiver(post_delete, sender=UserAccount)
def delete_user_notification(sender, instance, **kwargs):
    users = User.objects.exclude(id=instance.author.id)
    for user in users:
        if  user.is_staff == True or user.is_superuser:
            Notification.objects.create(
                user=user,
                title='User Deleted',
                message=f'{instance.author.username} has deleted user {instance.username}.',
                notification_type='delete_user',
                link="users",
            )

@receiver(post_save, sender=UserAccount)
def create_user_settings(sender, instance, created, **kwargs):
    if created:
        UserSettings.objects.create(user=instance)

@receiver(post_save, sender=UserSettings)
def change_settings_notification(sender, instance, created, **kwargs):
    users = User.objects.exclude(id=instance.author.id)
    if not created:
        for user in users:
            if  user.is_staff == True or user.is_superuser:
                Notification.objects.create(
                    user=instance.user.author,
                    title=f"chage of settings",
                    message=(
                        f"Your user '{instance.user.title}' "
                        f"has a new comment from {instance.author}. {instance.content or 'No content provided.'}"
                    ),
                    notification_type='settings_modifications',
                )