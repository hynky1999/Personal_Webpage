from django.urls import path
from .views import ContactView, SuccessView

app_name = 'contact_me'
urlpatterns = [
    path('', ContactView.as_view(), name='index'),
    path('success', SuccessView.as_view(), name='success'),
    ]
