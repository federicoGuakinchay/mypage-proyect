from django.contrib import admin
from .models import Notification

@admin.register(Notification)
class NotificationAdmin(admin.ModelAdmin):
    list_display = ('user', 'title', 'message', 'notification_type', 'created_at')
    list_filter = ('notification_type', 'created_at')
    search_fields = ('user__username', 'title', 'message')
    ordering = ('-created_at',)
