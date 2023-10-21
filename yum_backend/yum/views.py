from django.http import JsonResponse
from .models import Recipes
from django.forms.models import model_to_dict
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import RecipesSerializer
from rest_framework import generics, viewsets, status

class RecipesRetrieveAPIView(generics.RetrieveAPIView):
        queryset = Recipes.objects.all()
        serializer_class = RecipesSerializer

class RecipesListCreateAPIView(generics.ListCreateAPIView):
        queryset = Recipes.objects.all()
        serializer_class = RecipesSerializer

class RecipesUpdateAPIView(generics.UpdateAPIView):
    queryset = Recipes.objects.all()
    serializer_class = RecipesSerializer

class RecipesDeleteAPIView(generics.DestroyAPIView):
        queryset = Recipes.objects.all()
        serializer_class = RecipesSerializer
