# Generated by Django 4.2.6 on 2023-10-20 15:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('yum', '0002_recipes_ingredients_recipes_instructions_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='recipes',
            name='image',
            field=models.URLField(max_length=255),
        ),
    ]
