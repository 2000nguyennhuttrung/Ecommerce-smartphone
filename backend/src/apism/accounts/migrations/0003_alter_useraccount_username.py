# Generated by Django 3.2.9 on 2021-12-06 14:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0002_auto_20211206_2155'),
    ]

    operations = [
        migrations.AlterField(
            model_name='useraccount',
            name='username',
            field=models.CharField(blank='', max_length=255, unique=True),
        ),
    ]
