from .models import UserAccount , UserSettings
from ..notifications.models import Notification
from django.db.models.signals import post_save, pre_save, post_delete
from django.dispatch import receiver
from django.contrib.auth.models import User
from django.contrib.auth import get_user_model
from django.core.mail import send_mail  # For email notifications
from ..middleware  import get_current_user # Import middleware function


User = get_user_model()

@receiver(post_save, sender=UserAccount)
def new_user_notification(sender, instance, created, **kwargs):
    
    print('user saved')

    # ✅ Get the request user from middleware (returns author.slug)
    author_slug = get_current_user()
    
    #in  case get_current_user() return None : 
    author_object = None
    author_name = "Unknown User"
    if author_slug:
        try:
            author_object = User.objects.get(slug=author_slug)
            author_name = f"{author_object.first_name} {author_object.last_name}"
        except User.DoesNotExist:
            pass  # Keep default "Unknown User"(unknow_user)'
    
    # ✅ if a user is created 
    
    if created:
        
        #   instance == user.slug 
        created_user = User.objects.get(slug= instance)
        created_name = f"{created_user.first_name}  {created_user.last_name}"

        # ✅ Notify staff users -exclude the author
        staff_users = User.objects.filter(is_staff=True).exclude(id=author_slug.id if author_slug else None)
        for staff in staff_users:
            if staff  !=  author_object: 
                Notification.objects.create(
                    user=staff,
                    title="New User Registered",
                    message=f"""{author_name} ({author_object.slug}) has registered a new user: 
                        name:   {created_name}
                        email: {created_user.email}
                        slug: {created_user.slug}""",
                        notification_type="add_user",
                    link=f"/admin/users/useraccount/{instance.id}/change/",
                )
        
    else:
        # ✅ Notify to the user when his porfile was updated 
        if  author_slug !=  instance: #Staff user modified a user's profile (not their own) 
            
            #   instance == user.slug 
            created_user = User.objects.get(slug= instance)
            created_name = f"{created_user.first_name}  {created_user.last_name}"
            
            Notification.objects.create(
                user=staff,
                title='User Updated',
                message=f"""{author_name}({author_object.slug}) was modified your porfile:
                    name:   {Updated_user_name}
                    email: {Updated_user.email}
                    slug: {Updated_user.slug}""",
                notification_type='update_user',
                link=f"user/{Updated_user.slug}",
            )
        else: #A user modified  their own porfile 
            Notification.objects.create(
                user=author_object,
                title='User Updated',
                message=f"""you updated your account  successfully 
                    email: {author_object.email}
                    slug: {author_object.slug}""",
                notification_type='update_user',
                link=f"user/{author_object.slug}",
            )
        
        # ✅ Notify at staff when a user is updated - Exclude the author
        staff_users = User.objects.filter(is_staff=True).exclude(slug=author_slug if author_slug else None).exclude(slug=instance)
        for staff in staff_users:
            if  author_slug !=  instance: #Staff user modified a user's profile (not their own) 
                
                Updated_user = User.objects.get(slug= instance) #get  instance user
                Updated_user_name= Updated_user.first_name + ' ' + Updated_user.last_name
                
                Notification.objects.create(
                    user=staff,
                    title='User Updated',
                    message=f"""{author_name} ({author_object.slug}) has updated the porfile of {Updated_user_name}:
                        name:   {Updated_user_name}
                        email: {Updated_user.email}
                        slug: {Updated_user.slug}""",
                    notification_type='update_user',
                    link=f"user/{Updated_user.slug}",
                )
            else: # when a user update his own profile
                Notification.objects.create(
                    user=staff,
                    title='User Updated',
                    message=f"""{author_name}  has updated his  porfile:
                        email: {author_object.email}
                        slug: {author_object.slug}""",
                    notification_type='update_user',
                    link=f"user/{author_object.slug}",
                )

#Notifications when a user was deleted  (staff only) 
@receiver(post_delete, sender=UserAccount)
def delete_user_notification(sender, instance, **kwargs):
    
    print ('user delete')

    # ✅ Get the request user from middleware (returns author_slug.slug)
    author_slug = get_current_user()
    
    # ✅ in  case get_current_user() return None : 
    author_object = None
    author_name = "Unknown User"
    if author_slug:
        try:
            author_object = User.objects.get(slug=author_slug)
            author_name = f"{author_object.first_name} {author_object.last_name}"
        except User.DoesNotExist:
            pass  # Keep default "Unknown User"
    
    # ✅ get_current_user()  -Get the request user from middleware (it return author_slug.slug) 
    author_slug = get_current_user()
    author_object =  User.objects.get(slug= author_slug)
    author_name =  author_object.first_name + ' ' + author_object.last_name
    users = User.objects.filter(is_staff=True)
    for user in users:
        if  user.is_staff  or user.is_superuser:
            if  user.slug ==  author_slug:
                Notification.objects.create(
                    user=user,
                    title='User Deleted',
                    message=f'you was deleted a user ({instance}) succefully.',
                    notification_type='delete_user',
                    link="users",
                )
            else:
                Notification.objects.create(
                    user=user,
                    title='User Deleted',
                    message=f'{author_name}({author_slug}) has deleted user ({instance}).',
                    notification_type='delete_user',
                    link="users",
                )

@receiver(post_save, sender=UserAccount)
def create_user_settings(sender, instance, created, **kwargs):
    if created:
        UserSettings.objects.create(user=instance)

#notifications to change settings for super_User (delete this) 
#@receiver(post_save, sender=UserSettings)
#def change_settings_notification(sender, instance, created, **kwargs):
#    users = User.objects.exclude(slug=instance)
#    if not created:
#        for user in users:
#            if  user.is_staff or user.is_superuser:
#                Notification.objects.create(
#                    user=instance.user.author_slug,
#                    title=f"chage of settings",
#                    message=(
#                        f"Your user '{instance.user.title}' "
#                        f"has a new comment from {instance.author_slug}. {instance.content or 'No content provided.'}"
#                    ),
#                    notification_type='settings_modifications',
#                )