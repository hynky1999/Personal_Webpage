# Generated by Django 3.1.6 on 2021-02-21 21:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0004_auto_20210221_1758'),
    ]

    operations = [
        migrations.AddField(
            model_name='article',
            name='slug',
            field=models.SlugField(default='djangodbmodelsfieldscharfield', max_length=200, unique=True),
        ),
    ]