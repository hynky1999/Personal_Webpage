from django.shortcuts import render
from django.views.generic import DetailView, ListView
from django.db.models import Max
from .models import Image

# Create your views here.

class ImageList(ListView):
    model = Image
    template_name = 'gallery/index.html'
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['creation_date'] = Image.objects.all().aggregate(Max('creation_date'))['creation_date__max']
        return context

class ImageDetail(DetailView):
    model = Image
    template_name = 'gallery/image_detail.html'

    def get_object(self, queryset=None):
        return Image.objects.get(uuid=self.kwargs.get("uuid"))

