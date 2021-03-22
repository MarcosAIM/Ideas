from django.db import models
from django.conf import settings

# Create your models here.
class BaseIdea(models.Model):
    class Meta:
        ordering = ["last_modified","datetime_created"]
        verbose_name_plural = "Ideas"

    title = models.CharField(max_length=100,default="none")
    description = models.TextField()
    datetime_created = models.DateTimeField(auto_now_add=True)
    last_modified = models.DateTimeField(auto_now=True)
    author = models.ForeignKey(settings.AUTH_USER_MODEL,related_name='ideas', on_delete=models.CASCADE)

    class Meta:
        ordering = ['last_modified']

    def __str__(self):
        return self.title
