from django.contrib import admin
from .models import ContactCategory, ContactMessage

# Register your models here.
admin.site.register(ContactCategory)
admin.site.register(ContactMessage)
