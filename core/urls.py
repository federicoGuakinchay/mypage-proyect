from django.contrib import admin
from django.urls import path ,include,re_path
from django.conf.urls.static import static
from django.conf  import settings
from django.views.generic import TemplateView
import djoser

urlpatterns = [

    # Catch-all URL for the home React/Vite app (SPA routing)
    re_path(r'^$', TemplateView.as_view(template_name='index.html'), name='home'),
    re_path(r'^dashboard/$', TemplateView.as_view(template_name='dashboard.html'), name='dashboard'),

    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
    path('auth/', include('djoser.social.urls')),

    path('admin/', admin.site.urls),
    path('api/blog/',include('apps.blog.urls')),
    path('api/blog_categories/', include('apps.blog_categories.urls')),
    path('api/projects/', include('apps.projects.urls') ),
    path('api/projects_categories/', include('apps.projects_categories.urls')),
    path('api/notifications/',include('apps.notifications.urls')),
    path('api/messages/',include('apps.custom_messages.urls')),
]

# Serve media and static files
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

# Catch-all URL for React/Vite app (SPA routing)
#urlpatterns += [re_path(r'^.*$', TemplateView.as_view(template_name='index.html'), name='spa')]




#urlpatterns = [
#    path('admin/', admin.site.urls),
#] + static(settings.MEDIA_URL, document_root =  settings.MEDIA_ROOT)
#urlpatterns += [re_path(r'^.*',TemplateView.as_view(template_name='index.html'))]