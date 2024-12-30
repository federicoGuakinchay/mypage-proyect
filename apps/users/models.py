import logging
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.db import models
from django.utils import timezone
from django_quill.fields import QuillField
from django.utils.text import slugify
from django.conf import settings

logger = logging.getLogger(__name__)

def user_profile_img(instance, filename):
    return f'user/{instance.id}/{filename}'


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

    class UserRole(models.TextChoices):
        SUPERUSER = 'SUPERUSER', 'Superuser'
        STAFF = 'STAFF', 'Staff'
        ADMIN = 'ADMIN', 'Admin'
        EDITOR = 'EDITOR', 'Editor'


    email =          models.EmailField(unique=True)
    password =       models.CharField(max_length=128)
    first_name=      models.CharField(max_length=255)
    last_name =      models.CharField(max_length=255)
    slug =           models.CharField(max_length=255, unique=True)
    picture =        models.ImageField(upload_to=user_profile_img, null=True, blank=True)
    description=     QuillField(null=True, blank=True)
    created_at =     models.DateTimeField(default=timezone.now)
    updated_at =     models.DateTimeField(auto_now=True)
    
    role = models.CharField(
        max_length=10,
        choices=UserRole.choices,
        default=UserRole.STAFF,)

    is_active = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)  
    is_superuser = models.BooleanField(default=False)

    USERNAME_FIELD=  'email'
    REQUIRED_FIELDS= ['first_name','last_name', 'slug']
    
    objects = UserManager()

    def __str__(self):
        return self.slug

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(f"{self.first_name}-{self.last_name}-{self.pk or ''}")
        # Dynamically update `is_staff` and `is_superuser` based on role
        if self.role in {self.UserRole.ADMIN, self.UserRole.SUPERUSER}:
            self.is_staff = True
        if self.role == self.UserRole.SUPERUSER:
            self.is_superuser = True
        super().save(*args, **kwargs)


class UserSettings(models.Model):
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="settings"
    )
    theme = models.CharField(
        max_length=20,
        choices=[('light1', 'Light1'), ('light2', 'Light2'), ('dark1', 'Dark1'), ('darks2', 'Dark2')],
        default='light')
    email_notifications = models.BooleanField(default=False)
    push_notifications = models.BooleanField(default=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Settings for {self.user.first_name} {self.user.last_name}"