# Generated by Django 3.1.6 on 2021-03-07 18:47

import contact_me.models
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('contact_me', '0004_auto_20210303_2030'),
    ]

    operations = [
        migrations.AlterField(
            model_name='contactcategory',
            name='name',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='contactmessage',
            name='contact_category',
            field=models.ForeignKey(default=contact_me.models.ContactMessage.__get_default_category__, on_delete=django.db.models.deletion.CASCADE, to='contact_me.contactcategory'),
        ),
        migrations.AlterField(
            model_name='contactmessage',
            name='date',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
    ]
