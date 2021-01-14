from django.db import models
from django.conf import settings

# Create your models here.
class BaseIdea(models.Model):
    class Meta:
        ordering = ["last_modified","datetime_created"]
        verbose_name_plural = "Ideas"

        permissions = [
            ("create_idea","Can create an idea.")
            ("modify_idea", "Can modify idea, change description.")
            ("del_idea", "Can delete idea.")
        ]

    description = models.TextField()
    datetime_created = models.DateTimeField(auto_now_add=True)
    last_modified = models.DateTimeField(auto_now=True)
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
