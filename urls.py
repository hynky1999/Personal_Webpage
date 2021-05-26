from django.shortcuts import render
from django.urls import path
from .views import index

# Create your views here.
app_name = "articles"
urlpatterns = [
    path('', index, name="articles"),
]
