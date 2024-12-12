from django.db import models
class ProjectsCategory(models.Model):
  class Meta:
    verbose_name        = 'Projects Category'
    verbose_name_plural = 'Projects Categories'
  name   = models.CharField(max_length=255, unique=True ,null=False)
  slug   = models.SlugField(max_length=255, unique=True , null=False)
  views  = models.IntegerField(default=0, blank=True)
  
  def __str__(self):
    return self.name 
  
  def get_view_count(self):
    views = ViewCount.objects.filter(BlogCategory=self).count()
    return views

class Language(models.Model):
  class Meta:
    verbose_name        = 'Language'
    verbose_name_plural = 'Languages'
  name    =  models.CharField(max_length=255, unique=True ,null=False)
  views   =  models.IntegerField(default=0, blank=True)
  def __str__(self):
    return self.name 

class ViewCount(models.Model):
  category   = models.ForeignKey(ProjectsCategory, related_name='category_view_count',on_delete=models.CASCADE)
  ip_address = models.CharField(max_length=255)

  def __str__(self):
    return f"{self.ip_address}"

