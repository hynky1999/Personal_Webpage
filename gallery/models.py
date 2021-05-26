import uuid
from django.db import models
from django.utils import timezone

# Create your models here.
class Image(models.Model):
    uuid = models.UUIDField(unique = True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=100)
    description = models.TextField()
    image_field = models.ImageField('uploads/%Y/%m/%d', upload_to="images")
    creation_date = models.DateField(default=timezone.now)

    def __str__(self):
        return self.title
