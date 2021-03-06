# Generated by Django 3.2.9 on 2021-11-05 11:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0002_auto_20211105_1801'),
    ]

    operations = [
        migrations.AlterField(
            model_name='products',
            name='brightness',
            field=models.CharField(default='', max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='products',
            name='chip',
            field=models.CharField(default='', max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='products',
            name='cpu',
            field=models.CharField(default='', max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='products',
            name='frontCamera',
            field=models.CharField(default='', max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='products',
            name='image',
            field=models.TextField(default='', null=True),
        ),
        migrations.AlterField(
            model_name='products',
            name='imageListSlide',
            field=models.TextField(default='', null=True),
        ),
        migrations.AlterField(
            model_name='products',
            name='pixelRadio',
            field=models.CharField(default='', max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='products',
            name='ram',
            field=models.CharField(default='', max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='products',
            name='rearCamera',
            field=models.CharField(default='', max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='products',
            name='rom',
            field=models.CharField(default='', max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='products',
            name='screenSize',
            field=models.CharField(default='', max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='products',
            name='screenTech',
            field=models.CharField(default='', max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='products',
            name='sdCard',
            field=models.CharField(default='', max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='products',
            name='speed',
            field=models.CharField(default='', max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='products',
            name='video',
            field=models.TextField(default='', null=True),
        ),
    ]
