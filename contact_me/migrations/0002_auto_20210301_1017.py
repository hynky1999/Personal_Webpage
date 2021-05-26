# Generated by Django 3.1.6 on 2021-03-01 09:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('contact_me', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='contactmessage',
            old_name='name',
            new_name='pronoun',
        ),
        migrations.AddField(
            model_name='contactmessage',
            name='email',
            field=models.EmailField(default='Male', max_length=254),
            preserve_default=False,
        ),
    ]
