from django.test import TestCase, Client
from django.urls import reverse
from .views import ArticleDetail
from .models import Article
from .header_agregator import Header, extract_headers

# Create your tests here.

class OverviewArticleTests(TestCase):

    def test_extract_header(self):
        content= """
        <h1 id = "1">Ahoj</h1>
        <h2 id="2">kek</h2>
        <h1 class="cccccr" id="brek">cc</h1>
        """
        headers = extract_headers(content)
        self.assertIn(Header('1'), headers)
        self.assertIn(Header('2'), headers[0].sub_headers)
        self.assertIn(Header('brek'), headers)


    def test_firt_layer_header(self):
        content="""
        <h1 id="ahooj">t1</h1>
        <a id="halo">fff</a>
        <h1>t2</h1>
        <h2>fff</h2>
        <h1 id="uff">t3</h1>
        """
        title = 'a'
        Article.objects.create(title=title, content=content)
        c = Client()
        context = c.get(reverse('articles:detail', args=[title])).context
        self.assertIn(Header('ahooj'), context['header_list'])
        self.assertIn(Header('uff'), context['header_list'])


    


