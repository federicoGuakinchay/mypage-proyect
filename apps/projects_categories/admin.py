from django.contrib import admin
from .models import *

class ProcjectCategoryAdmin(admin.ModelAdmin):
  list_display=('id', 'name',)
  list_display_links= ('name',)
  list_per_page=25

class LanguageAdmin(admin.ModelAdmin):
  list_display=('id', 'name',)
  list_display_links= ('name',)
  list_per_page=25

admin.site.register(ProjectsCategory,ProcjectCategoryAdmin)
admin.site.register(Language,LanguageAdmin)