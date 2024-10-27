import logging
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.db import models
from django.utils import timezone
from django_quill.fields import QuillField

logger = logging.getLogger(__name__)

def user_profile_img(instance, filename):
    return f'user/{instance.id}/{filename}'


class UserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('The Email field must be set')
        email = self.normalize_email(email)
        logger.debug(f'Creating user: {email} with extra fields: {extra_fields}')
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user
    
    def create_superuser(self, email, password=None, **extra_fields):
        user = self.create_user(email, password, **extra_fields)
        user.is_staff = True
        user.is_superuser= True
        user.save(using=self._db)
        return user


class UserAccount(AbstractBaseUser, PermissionsMixin):

    email =       models.EmailField(unique=True)
    first_name=   models.CharField(max_length=255)
    last_name =   models.CharField(max_length=255)
    alias =       models.CharField(max_length=255, unique=True)
    picture =     models.ImageField(upload_to=user_profile_img, null=True, blank=True)
    bio =         QuillField(null=True, blank=True)
    created_at =  models.DateTimeField(default=timezone.now)
    updated_at =  models.DateTimeField(auto_now=True)
    
    is_editor =   models.BooleanField(default=False)
    is_admin =    models.BooleanField(default=False)
    is_active =   models.BooleanField(default=True)
    is_staff =    models.BooleanField(default=False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name','last_name', 'alias']

    objects = UserManager()

    def __str__(self):
        return self.alias