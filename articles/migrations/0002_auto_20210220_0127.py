# Generated by Django 3.1.6 on 2021-02-20 00:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='article',
            name='body',
            field=models.TextField(default='Missing Text'),
        ),
        migrations.AddField(
            model_name='article',
            name='title',
            field=models.CharField(default='No Title', max_length=200),
        ),
    ]
