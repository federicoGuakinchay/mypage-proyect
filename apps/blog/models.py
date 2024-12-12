from django.db import models
from django.utils import timezone
from apps.blog_categories.models import BlogCategory
from django_quill.fields import QuillField
from  django.conf  import settings 
User = settings.AUTH_USER_MODEL

def blog_thumnail_directory(instance,filename):
  return f'blog/{instance.id}/{filename}'

class Post(models.Model):

  class PostObjects(models.Manager):
    def get_queryset(self):
      return super().get_queryset().filter(status='published')
  
  options = (
    ('draft', 'Draft'),
    ('published', 'Published'),
  ) 

  title  =      models.CharField(max_length=255)
  slug =        models.SlugField(max_length=255, unique=True)
  thumbnail =   models.ImageField(upload_to='blog')

  description=  models.TextField()
  content =     QuillField()

  status  =     models.CharField(max_length=10, choices=options, default='draft')
  objects =     models.Manager()  #defaul manager
  postobjects = PostObjects()     # custom manager

  published =   models.DateTimeField(default=timezone.now)
  updated =     models.DateTimeField(default=timezone.now)
  limit=        models.DateTimeField(null=True, blank=True)
  views = models.IntegerField(default=0, blank=True)

  category = models.ForeignKey(BlogCategory, verbose_name="Category", on_delete=models.PROTECT)
  
  author = models.ForeignKey(User, on_delete=models.CASCADE)
  class Meta:
    ordering = ('-published',)

  def get_view_count(self):
      views = ViewCount.objects.filter(post=self).count()
      return views
  
  def __str__(self):
        return self.title

class ViewCount(models.Model):
    post = models.ForeignKey(Post, related_name='blogpost_view_count', on_delete=models.CASCADE)
    ip_address = models.CharField(max_length=255)

    def __str__(self):
      return f"View for {self.post.title} from {self.ip_address}"
    
class CommentPost(models.Model):
    post = models.ForeignKey('Post',related_name='blog_comments',on_delete=models.CASCADE)
    author = models.ForeignKey(User,related_name='blog_comments_author',on_delete=models.CASCADE)
    content = QuillField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    class Meta:
        ordering = ('-created_at',)
    def __str__(self):
        return f"Comment by {self.author} on {self.post.title}"