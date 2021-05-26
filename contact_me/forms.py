from django.forms import ModelForm, EmailField
from django.core.exceptions import ValidationError
import datetime
from django.utils import timezone
from .models import ContactMessage

class EmailTimeoutValidator:
    def __init__(self, timeout):
        self.timeout_duration = timeout

    
    def __call__(self, value):
        messages = ContactMessage.objects.filter(email = value)
        if not messages:
            return

        last_date = messages.latest().date
        diff = timezone.now() - last_date
        if diff <= self.timeout_duration:
            min_diff = (self.timeout_duration - diff).seconds//60
            raise ValidationError(('Please wait %(duration)s minutes before submiting'),
                    code='invalid',
                    params={'duration': min_diff})


class ContactForm(ModelForm):
    email = EmailField(validators=[EmailTimeoutValidator(datetime.timedelta(hours=0))])

    class Meta:
        model = ContactMessage
        fields = ('email',
                'pronoun',
                'subject',
                'body',
                'contact_category')
