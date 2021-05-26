from django.test import TestCase, Client
from django.forms import EmailField
from django.utils import timezone
from django.urls import reverse
from django.core import mail
from .forms import EmailTimeoutValidator
from django.core.exceptions import ValidationError
from .models import ContactCategory, ContactMessage
import datetime


def create_contactCategory(name="hello"):
    return ContactCategory.objects.create(name=name)

def create_contactMessage(email="john@email.com",
        pronoun="undefined",
        subject="Problem",
        date=timezone.now(),
        body="",
        contact_category=None):


    return ContactMessage.objects.create(email=email,
            pronoun=pronoun,
            subject=subject,
            date=date,
            body=body,
            contact_category=contact_category)


# Create your tests here.
class EmailTimeoutValidatorTests(TestCase):

    def test_was_submited_within_timeout(self):
        duration = datetime.timedelta(hours=4)
        base = timezone.now() - duration + datetime.timedelta(minutes=4)
        email = "hynek@gmail.com"
        field = EmailField(validators=[EmailTimeoutValidator(duration)])
        create_contactMessage(email=email, date=base,
                contact_category=create_contactCategory())

        with self.assertRaises(ValidationError):
            field.clean(email)

    def test_was_submited_after_timeout(self):
        duration = datetime.timedelta(hours=2, minutes=2)
        base = timezone.now() - duration - datetime.timedelta(minutes=20)
        email = "hynek@gmail.com"
        field = EmailField(validators=[EmailTimeoutValidator(duration)])
        create_contactMessage(email=email, date=base,
                contact_category=create_contactCategory())

        self.assertIs(field.clean(email), email)


class EmailSendTest(TestCase):
    
    def test_contact_mail(self):
        ctg = create_contactCategory('help')
        data = {'email': 'kyd@seznam.com',
                'pronoun': 'undefined',
                'subject': 'Need help',
                'body': 'help',
                'contact_category': ctg.pk
                }
        path = reverse('contact_me:index')
        client = Client()
        resp = client.post(path, data=data)
        self.assertEqual(len(mail.outbox), 1)
