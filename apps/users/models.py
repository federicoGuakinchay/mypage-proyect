import logging
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.db import models
from django.utils import timezone
from django_quill.fields import QuillField
from django.utils.text import slugify
from django.conf import settings
from phonenumber_field.modelfields import PhoneNumberField

logger = logging.getLogger(__name__)

# site to save the user porfile img
def user_profile_img(instance, filename):
    return f'user/{instance.id}/{filename}'

class Nationality(models.Model):
    name =  models.CharField(max_length=100, blank=False,unique=True)
    code = models.CharField(max_length=10, blank=False,unique=True)
    def __str__(self):
        return self.name
    
class Speciality(models.Model): 
    name =  models.CharField(max_length=100, blank=False,unique=True)
    code =  models.CharField(max_length=10, blank=False,unique=True)
    def __str__(self):
        return self.name

class UserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('The Email field must be set')
        email = self.normalize_email(email)
        logger.debug(f'Creating user: {email} with extra fields: {extra_fields}')
        extra_fields.setdefault("role", UserAccount.UserRole.EDITOR)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user
    
    def create_staffuser(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError("The Email field must be set")
        email = self.normalize_email(email)
        extra_fields.setdefault("role", UserAccount.UserRole.STAFF)
        extra_fields.setdefault("is_active", True)
        extra_fields.setdefault("is_staff", True)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault("role", UserAccount.UserRole.SUPERUSER)
        extra_fields.setdefault("is_active", True)
        extra_fields.setdefault("is_staff", True)  # Superuser should always be staff
        extra_fields.setdefault("is_superuser", True)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user
class UserAccount(AbstractBaseUser, PermissionsMixin):
    #A SUPERUSER can access the Django admin site and create, edit, and delete other users, including other superusers. Be careful when assigning the SuperUser role, as they can create, delete, or modify projects and blog entries of all users.

    #A STAFF user can create admin and editor users but cannot create other staff users or superusers. They have limited access to the Django admin site and can modify projects or blog entries of ADMIN and EDITOR users. They can also create and delete their own projects and blog entries.
    
    #A ADMIN user  can create Editors user  but no others admins  (this  admin cannot have access to the Django admin site)(it can change  the status of  the projects or blogs (only deactivate they) of  the EDITOR users , can create and delete his owns proyects and blog entries) 
    
    #An EDITOR user can only create and delete their own projects and blog entries.
    class UserRole(models.TextChoices):
        SUPERUSER = 'SUPERUSER', 'Superuser'
        STAFF = 'STAFF', 'Staff'
        ADMIN = 'ADMIN', 'Admin'
        EDITOR = 'EDITOR', 'Editor'
    # fields of the user 
    email =          models.EmailField(unique=True,help_text="Required: Please enter a valid email address.")
    first_name=      models.CharField(max_length=255,help_text="Required")
    last_name =      models.CharField(max_length=255,help_text="Required")
    slug =           models.CharField(max_length=255, unique=True, blank=True)
    picture =        models.ImageField(upload_to=user_profile_img, null=True, blank=True)
    description=     QuillField(null=True, 
                                blank=True,
                                help_text="Optional: Add a description of yourself, your abilities, or your career.")
    created_at =     models.DateTimeField(default=timezone.now)
    updated_at =     models.DateTimeField(auto_now=True)
    linkedin   =     models.URLField(blank=True)
    github     =     models.URLField(blank=True)
    phone = PhoneNumberField(blank=True, help_text="Enter phone number with country code")
    # alternatives phones or  others social media 
    other_contact=   QuillField(
                                null=True, 
                                blank=True,
                                verbose_name="Other Contacts",
                                help_text="Optional: Add alternative social media links, phone numbers, or email addresses to contact you.")
    nationality = models.ForeignKey("Nationality", on_delete=models.SET_NULL, verbose_name="Nationality", blank=True, null=True, default=None)
    specialism =  models.ForeignKey("Speciality", verbose_name="Specialism",blank=True,on_delete=models.SET_NULL,null=True,default=None)
    role = models.CharField(
                            max_length=10,
                            choices=UserRole.choices,
                            default=UserRole.EDITOR,
                            help_text="Be careful when assigning the SUPERUSER role to someone.")

    is_active = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)  
    is_superuser = models.BooleanField(default=False)

    # Change  to do  :  allow to use  the user  name  or  thr  email  to  join  in the cites 
    USERNAME_FIELD=  'email'
    REQUIRED_FIELDS= ['first_name','last_name',]
    
    objects = UserManager()

    def __str__(self):
        return self.slug

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        if not self.slug:
            self.slug = slugify(f"{self.first_name}-{self.last_name}-{self.pk or ''}")
        # Dynamically update `is_staff` and `is_superuser` based on role
        if self.role in {self.UserRole.ADMIN, self.UserRole.SUPERUSER}:
            self.is_staff = True
        if self.role == self.UserRole.SUPERUSER:
            self.is_superuser = True
        super().save(*args, **kwargs)


# the  user setting are  to save the settings  of my own  user  it is for practice for made diferent interfacess whith similars  dessing (also i WANT to recopilae  info of the  user setting  it is not  necesary but with it i can made a practice to reprecentate the  info pf the settings  in a diferent  tables)  
class UserSettings(models.Model):
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="settings"
    )
    theme = models.CharField(
        max_length=20,
        choices=[('light1', 'Light1'), ('light2', 'Light2'), ('dark1', 'Dark1'), ('dark2', 'Dark2')],
        default='light')
    email_notifications = models.BooleanField(default=False)
    push_notifications = models.BooleanField(default=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Settings for {self.user.first_name} {self.user.last_name}"