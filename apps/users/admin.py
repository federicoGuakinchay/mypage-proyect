from django.contrib import admin
from .models import *
from django.utils.translation import gettext_lazy as _

class UserAdmin(admin.ModelAdmin):
    ordering = ('email',)
    list_display = ('email', 'first_name', 'is_staff', 'is_active')
    list_filter = ('is_staff', 'is_active')
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        ('Personal Info', {'fields': ('first_name','last_name', 'slug', 'picture', 'description_en','description_es',)}),
        ('Permissions', {'fields': ('is_active', 'is_staff', 'is_editor','is_admin','groups', 'user_permissions')}),
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