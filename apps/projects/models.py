from django.db import models
from django.utils import timezone
from apps.projects_categories.models import ProjectsCategory , Language
from django_quill.fields import QuillField
from  django.conf  import settings 
User = settings.AUTH_USER_MODEL

def project_thumnail_directory(instance,filename):
  return f'project/{instance.id}/{filename}'

class Client(models.Model): 
  name = models.CharField(max_length=255 , unique=True,blank=False)
  email = models.EmailField(max_length=255 , unique=True,blank=True)
  phone_number = models.CharField(max_length=20 , unique=True,blank=True)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)
  img  = models.ImageField(upload_to='clients',blank=True)
  url  = models.URLField(blank=True) 

class Project(models.Model):

  class ProjectObjects(models.Manager):
    def get_queryset(self):
      return super().get_queryset().filter(status='published')
  
  options   = (('draft', 'Draft'),('published', 'Published'),) 
  title     =      models.CharField(max_length=255 , unique=True)
  thumbnail =      models.ImageField(upload_to='project')
  content   =      QuillField(blank=True)
  status    =      models.CharField(max_length=10, choices=options, default='draft')
  objects   =      models.Manager()        
  projectobjects = ProjectObjects()
  published =      models.DateTimeField(default=timezone.now)
  updated   =      models.DateTimeField(default=timezone.now)
  views     =      models.IntegerField(default=0, blank=True)
  categories=      models.ManyToManyField(ProjectsCategory,blank=True,)
  languages =      models.ManyToManyField(Language,)
  client    =      models.ForeignKey(Client,blank=True,on_delete=models.SET_NULL,null=True)
  # the  author have  the control (the staff can dissable your  proyect but only you  or a super user can delete it)  
  author    =      models.ForeignKey(User, on_delete=models.CASCADE)
  # the  team can't modify  the   project  only staff  and   super  user can  do it  is  to  show  the  internals  collaboratos in this project  if you use  a externals collaborators   add   it  in the content 
  team      =      models.ManyToManyField(User, related_name="project_team", blank=True)
  class Meta:
    ordering = ('-published',)

  def get_comments(self):
      return self.comments
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

class CommentProject(models.Model):
    project    = models.ForeignKey('Project',related_name='project_comments',on_delete=models.CASCADE)
    author     = models.ForeignKey(User,related_name='project_comments_author',on_delete=models.CASCADE)
    content    = QuillField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    class Meta:
        ordering = ('-created_at',)
    def __str__(self):
        return f"Comment by {self.author} on {self.project.title}"