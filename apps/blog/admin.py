from django.contrib import admin
from .models import *


admin.site.register(Post)

@admin.register(CommentPost)
class CommentPostAdmin(admin.ModelAdmin):
    list_display = ('author', 'post', 'created_at',)
    search_fields = ('post__title', 'author__email', 'content')
    list_filter = ('created_at',)
