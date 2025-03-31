from django.contrib import admin
from .models import *
from django.utils.translation import gettext_lazy as _


class UserAdmin(admin.ModelAdmin):
    ordering = ('email','slug')
    list_display = ('email', 'slug', 'is_staff', 'is_active','id')
    list_filter = ('is_staff', 'is_active')
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        ('Personal Info', {'fields': ('first_name','last_name', 'slug', 'picture','specialism', 'description_en','description_es','linkedin','github','nationality','phone','other_contact')}),
        ('Permissions', {'fields': ('is_active', 'role' , 'groups' , 'user_permissions')}),
        ('Important Dates', {'fields': ('last_login','created_at')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'first_name','last_name', 'slug', 'password1', 'password2', 'is_active', 'is_staff',)}
        ),
    )
    search_fields = ('email', 'first_name','last_name', 'slug')
    filter_horizontal = ('groups', 'user_permissions')

admin.site.register(UserAccount, UserAdmin)

@admin.register(UserSettings)
class UserSettingsAdmin(admin.ModelAdmin):
    list_display = ('user', 'theme', 'email_notifications', 'push_notifications', 'updated_at')
    search_fields = ('user__username', 'user__email')
    list_filter = ('theme', 'email_notifications', 'push_notifications')

@admin.register(Nationality)
class NationalityAdmin(admin.ModelAdmin):
    list_display = ('name', 'code')

@admin.register(Speciality)
class SpecialityAdmin(admin.ModelAdmin):  
    list_display = ('name', 'code')