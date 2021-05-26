from django.shortcuts import render
from django.urls import path
from .views import ArticleDetail, ArticleList

# Create your views here.
app_name = "articles"
urlpatterns = [
    path('', ArticleList.as_view(), name='index'),
    path('<slug:slug>/', ArticleDetail.as_view(), name='detail')
]
