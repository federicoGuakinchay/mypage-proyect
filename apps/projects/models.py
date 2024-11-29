from django.db import models
from django.utils import timezone
from apps.projects_categories.models import ProjectsCategory , Language
from django_quill.fields import QuillField
from  django.conf  import settings 
User = settings.AUTH_USER_MODEL

def project_thumnail_directory(instance,filename):
  return f'project/{instance.id}/{filename}'

class Project(models.Model):

  class ProjectObjects(models.Manager):
    def get_queryset(self):
      return super().get_queryset().filter(status='published')
  
  options = (('draft', 'Draft'),('published', 'Published'),) 
  title  =         models.CharField(max_length=255 , unique=True)
  thumbnail =      models.ImageField(upload_to='project')
  content =        QuillField(blank=True)
  status  =        models.CharField(max_length=10, choices=options, default='draft')
  objects =        models.Manager()        
  projectobjects = ProjectObjects()
  published =      models.DateTimeField(default=timezone.now)
  updated =        models.DateTimeField(default=timezone.now)
  views =          models.IntegerField(default=0, blank=True)
  categories =     models.ManyToManyField(ProjectsCategory,blank=True,)
  languages =      models.ManyToManyField(Language,)
  author =         models.ForeignKey(User, on_delete=models.CASCADE)
  class Meta:
    ordering = ('-published',)

  def get_view_count(self):
      views = ViewCount.objects.filter(post=self).count()
      return views
  
  def __str__(self):
        return self.title

class ViewCount(models.Model):
    project    = models.ForeignKey(Project, related_name='project_view_count', on_delete=models.CASCADE)
    ip_address = models.CharField(max_length=255)
    def __str__(self):
      return f"View for {self.project.title} from {self.ip_address}"
