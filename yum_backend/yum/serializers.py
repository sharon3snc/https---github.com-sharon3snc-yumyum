from rest_framework import serializers

from .models import Recipes

class RecipesSerializer(serializers.ModelSerializer):
    class Meta:
        model= Recipes
        fields = ['id', 'name', 'image', 'time', 'cal', 'menu', 'restriccion', 'ingredients', 'instructions', 'comensales']
