from django.contrib import admin
from .models import *


admin.site.register(Project)

@admin.register(CommentProject)
class CommentProjectAdmin(admin.ModelAdmin):
    list_display = ('author', 'project', 'created_at', )
    search_fields = ('project__title', 'author__email', 'content')
    list_filter = ('created_at',)