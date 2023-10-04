from django.http import JsonResponse
from .models import Recipes
from django.forms.models import model_to_dict
from rest_framework.response import Response
from rest_framework.decorators import api_view


def api_yum(request, *arg, **kwargs):
    yum_data = Recipes.objects.all().order_by('?'). first()

    data = {}

    if yum_data:
        data = model_to_dict(yum_data)
    return Response(data)
