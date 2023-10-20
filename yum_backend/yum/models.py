from django.db import models

class Recipes(models.Model):
    name= models.CharField(max_length=255)
    image= models.URLField(max_length=255)
    time= models.CharField(max_length=20)
    cal= models.CharField(max_length=20)
    menu= models.CharField(max_length=255)
    restriccion= models.CharField(max_length=255)
    ingredients = models.JSONField(default=list)
    instructions = models.JSONField(default=list)
    comensales= models.IntegerField()

