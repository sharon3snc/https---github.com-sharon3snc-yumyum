from django.db import models

class Recipes(models.Model):
    name= models.CharField(max_length=5000)
    image= models.CharField(max_length=5000)
    time= models.CharField(max_length=5000)
    cal= models.CharField(max_length=5000)
    menu= models.CharField(max_length=5000)
    restriccion= models.CharField(max_length=5000)
    comensales= models.IntegerField()

