'''from .models import Project , CommentProject
from ..notifications.models import Notification
from django.db.models.signals import post_save, pre_save, post_delete,m2m_changed
from django.dispatch import receiver
from django.contrib.auth.models import User
from django.contrib.auth import get_user_model
from django.core.mail import send_mail       # For email notifications
from ..middleware  import get_current_user   # Import middleware function
from  ..users.models import UserAccount , UserSettings
User = UserAccount

@receiver(m2m_changed, sender=Project.team.through)
def notify_team_changes(sender, instance, action, pk_set, **kwargs):
    """
    Sends a notification when a user is added to or removed from a project team.
    """
    if action == "post_add":
        # Users were added to the team
        for user_id in pk_set:
            user = instance.team.model.objects.get(id=user_id)  # Get the user instance

            # In-app notification for the added user
            Notification.objects.create(
                user=user,
                title="Added to Project Team",
                message=f"You have been added to the project '{instance.title}'.",
                notification_type="team_add",
                link=f"/projects/{instance.id}/"
            )

            # Notify other team members about the new user
            for team_member in instance.team.exclude(id=user_id):
                Notification.objects.create(
                    user=team_member,
                    title="New Team Member",
                    message=f"{user.first_name} {user.last_name} has joined the project '{instance.title}'.",
                    notification_type="team_add",
                    link=f"/projects/{instance.id}/"
                )

            # Optional: Send an email
            #send_mail(
            #    subject=f"Added to Project: {instance.title}",
            #    message=f"Hello {user.first_name},\n\nYou have been added to the project '{instance.title}'.",
            #    from_email="noreply@example.com",
            #    recipient_list=[user.email],
            #    fail_silently=True,
            #)

    elif action == "post_remove":
        # Users were removed from the team
        for user_id in pk_set:
            user = instance.team.model.objects.get(id=user_id)  # Get the user instance

            # Notify the removed user
            Notification.objects.create(
                user=user,
                title="Removed from Project Team",
                message=f"You have been removed from the project '{instance.title}'.",
                notification_type="team_remove",
                link="/projects/"
            )

            # Notify other team members
            for team_member in instance.team.all():
                Notification.objects.create(
                    user=team_member,
                    title="Team Member Removed",
                    message=f"{user.first_name} {user.last_name} was removed from the project '{instance.title}'.",
                    notification_type="team_remove",
                    link=f"/projects/{instance.id}/"
                )

            # Optional: Send an email
            #send_mail(
            #    subject=f"Removed from Project: {instance.title}",
            #    message=f"Hello {user.first_name},\n\nYou have been removed from the project '{instance.title}'.",
            #    from_email="noreply@example.com",
            #    recipient_list=[user.email],
            #    fail_silently=True,
            #)

@receiver(post_save, sender=Project)
def project_notification(sender, instance, created, **kwargs):
    # Get the project team members
    team_members = instance.team.all()
    # Get the project author
    author = instance.author
    
    if created:
        # Send  notification  to the  author
        Notification.objects.create(
            title='You Created New Project ',
            message=f'You have created a new project ({instance.title}) successfully',
            user=author ,
            project=instance,
            notification_type='project_created',
            link=f"proyects/{instance.title}",
            )
        # Send notification to team members
        for member in team_members:
        # Create an in-app notification
            Notification.objects.create(
                user=member,
                title=f"New Project Created",
                message=f"The project '{instance.title}' has been Created. by {instance.author.slug} and  you has be  added   like a collaborator",
                notification_type="project_created",
                link=f"/projects/{instance.id}/"
            )
        # Notify all staff users except the author
        #users = User.objects.filter(is_staff=True).exclude(id=instance.author.id) 
        #for user in users:
        #    Notification.objects.create(
        #        user=user,
        #        title=f"A new project has been Created",
        #        message=f"'{instance.author.first_name} {instance.author.last_name}' has  publised a new  proyect '{instance.title}'",
        #        notification_type='project_created',
        #        link=f"proyects/{instance.title}",
        #    )
        # Email notifications for users with email_notifications=True
        
        #users = users.filter(
        #    user__in=users, email_notifications=True
        #)
        #for setting in users_with_email_notifications:
        #    send_mail(
        #        "A new project has been published.",
        #        (
        #            f"'{instance.author.first_name} {instance.author.last_name}' "
        #            f"has published a new project '{instance.title}'."
        #        ),
        #        'your_email@gmail.com',  # Replace with page email
        #        [setting.user.email],
        #    )
    else:# project update
        # Send  notification  to the  author
        Notification.objects.create(
            title='You updated a proyect',
            message=f'You have updated the project ({instance.title}) successfully',
            user=author ,
            project=instance,
            notification_type='project_update',
            link=f"proyects/{instance.title}",
            )
        # Send notification to team members
        for member in team_members:
        # Create an in-app notification
            Notification.objects.create(
                user=member,
                title=f"New Project Created",
                message=f"The project '{instance.title}' has been Created. by {instance.author.slug} and  you has be  added   like a collaborator",
                notification_type="project_created",
                link=f"/projects/{instance.id}/"
            )
        users = User.objects.exclude(id=instance.author.id)
        # Email notifications for users with email_notifications=True
        #users_with_email_notifications = UserSettings.objects.filter(
        #    user__in=users, email_notifications=True
        #)
        #for setting in users_with_email_notifications:
        #    send_mail(
        #        "A new project has been updated.",
        #        (
        #            f"'{instance.author.first_name} {instance.author.last_name}' "
        #            f"has updated a new project '{instance.title}'."
        #        ),
        #        'your_email@gmail.com',  # Replace with page email
        #        [setting.user.email],
        #    )

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
    Notification.objects.create(
            title='You Deleted a Project ',
            message=f'You have deleted a new project ({instance.title}) successfully',
            user=instance.author ,
            project=instance,
            notification_type='project_deleted',
            link=f"proyects/{instance.title}",
            )
    team_members = instance.team.all()
    # Notify about  the  elimination  of  the proyect at the team members
    for member in team_members:
        # Create an in-app notification
            Notification.objects.create(
                user=member,
                title=f"A Project has ben deleted",
                message=f"The project '{instance.title}' has been deleted, by {instance.author.slug} and  you was part of the  team  of these proyect",
                notification_type="project_created",
                link=f"/projects/{instance.id}/"
            )
        
    # Email notifications for users with email_notifications=True
        #users_with_email_notifications = UserSettings.objects.filter(
        #    user__in=users, email_notifications=True
        #)
        #for setting in users_with_email_notifications:
        #    send_mail(
        #        "A new project has been updated.",
        #        (
        #            f"'{instance.author.first_name} {instance.author.last_name}' "
        #            f"has updated a new project '{instance.title}'."
        #        ),
        #        'your_email@gmail.com',  # Replace with page email
        #        [setting.user.email],
        #    )

'''