from django.db import models
from django.utils import timezone, text
from django_extensions.db import fields

class Article(models.Model):
    title = models.CharField(max_length=200, default="No Title")
    slug = fields.AutoSlugField(unique=True, populate_from='title')
    content = models.TextField(default="Missing Text")
    creation_date = models.DateField(default=timezone.now)

    def __str__(self):
        return self.slug

# Create your models here.
