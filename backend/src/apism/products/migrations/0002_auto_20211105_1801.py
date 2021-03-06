# Generated by Django 3.2.9 on 2021-11-05 11:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='products',
            name='brightness',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='products',
            name='chip',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='products',
            name='cpu',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='products',
            name='frontCamera',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='products',
            name='image',
            field=models.TextField(null=True),
        ),
        migrations.AlterField(
            model_name='products',
            name='imageListSlide',
            field=models.TextField(null=True),
        ),
        migrations.AlterField(
            model_name='products',
            name='pixelRadio',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='products',
            name='ram',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='products',
            name='rearCamera',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='products',
            name='rom',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='products',
            name='screenSize',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='products',
            name='screenTech',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='products',
            name='sdCard',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='products',
            name='speed',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='products',
            name='video',
            field=models.TextField(null=True),
        ),
    ]
