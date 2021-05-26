from django.shortcuts import render
from django.db import models
from django.utils import timezone

class ContactCategory(models.Model):
    class Meta:
        ordering = ['-pk']
        get_latest_by = '-pk'

    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class ContactMessage(models.Model):
    class Meta:
        ordering = ['date']
        get_latest_by = ['date']

    PRONOUNS = [
            ('undefined', 'undefined'),
            ('he', 'he'),
            ('she', 'she')
            ]

    def __get_default_category__():
        return ContactCategory.objects.first()

    email = models.EmailField(default="johndoh@mail.com")
    pronoun = models.CharField(max_length=20, choices=PRONOUNS, default="undefined")
    subject = models.CharField(max_length=100, default="Problem")
    date = models.DateTimeField(default=timezone.now)
    body = models.TextField(default="Write your message here")
    contact_category = models.ForeignKey(ContactCategory,
            on_delete=models.CASCADE,
            default=__get_default_category__)

    def __str__(self):
        return f"{self.subject} ({self.contact_category})"

# Create your models here.
