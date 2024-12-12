from django.contrib import admin
from .models import Message

@admin.register(Message)
class MessageAdmin(admin.ModelAdmin):
    list_display = ("sender", "receiver", "subject", "is_read", "created_at")
    search_fields = ("sender__email", "receiver__email", "subject")
    list_filter = ("is_read", "created_at")