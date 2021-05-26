from django.views.generic import ListView, DetailView
from .models import Article
from .header_agregator import extract_headers

class ArticleList(ListView):
    model = Article
    template_name = 'articles/index.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['articles'] = Article.objects.all()
        return context

class ArticleDetail(DetailView):
    model = Article
    template_name = 'articles/article_detail.html'

    def get_object(self, queryset=None):
        return Article.objects.get(slug=self.kwargs.get("slug"))

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        object = self.get_object(queryset=None)
        headers = extract_headers(object.content)
        context['header_list'] = headers
        return context
