# Generated by Django 3.2.9 on 2021-11-06 10:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('carts', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='carts',
            name='idCart',
            field=models.IntegerField(default=1),
        ),
    ]
