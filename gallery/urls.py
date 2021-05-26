from django.urls import path
from .views import ImageDetail, ImageList

from . import views
app_name = 'gallery'
urlpatterns = [
    path('', ImageList.as_view(), name='index'),
    path('<uuid:uuid>', ImageDetail.as_view(), name='detail')
]
