from django.shortcuts import render
from django.views.generic.edit import FormView
from django.views.generic.base import TemplateView
from django.urls import reverse
from django.utils import timezone
from django.http import HttpResponse, HttpResponseRedirect
from django.core.mail import mail_admins
from .forms import ContactForm
from .models import ContactMessage
# Create your views here.


class ContactView(FormView):
    template_name = 'contact_me/index.html'
    form_class = ContactForm
    message = "New message from {email}:\n {message}"

    def form_valid(self, form):
        success_url = reverse('contact_me:success', current_app= self.request.resolver_match.namespace)
        email = form.cleaned_data['email']
        pronoun = form.cleaned_data['pronoun']
        date = timezone.now()
        body = form.cleaned_data['body']
        contact_category = form.cleaned_data['contact_category']
        message = ContactMessage.objects.create(
                email = email,
                pronoun = pronoun,
                date = date,
                body = body,
                contact_category = contact_category
                )
        message.save()
        a = mail_admins(contact_category,
                self.message.format(email=email, message=body), fail_silently=False)
        
        return HttpResponseRedirect(success_url)

class SuccessView(TemplateView):
    template_name = "contact_me/success.html"
        
