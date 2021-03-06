# Generated by Django 3.2.9 on 2021-12-07 12:24

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Bills',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=255)),
                ('first_name', models.CharField(max_length=255)),
                ('last_name', models.CharField(max_length=255)),
                ('email', models.CharField(max_length=255)),
                ('product_name', models.CharField(max_length=255)),
                ('image', models.TextField(blank=True, default='', null=True)),
                ('price', models.FloatField()),
                ('quantity', models.IntegerField(default=1)),
            ],
        ),
    ]
