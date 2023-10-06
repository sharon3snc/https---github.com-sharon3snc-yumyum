from django.urls import path
from . import views

urlpatterns = [
    path('<int:pk>', views.RecipesRetrieveAPIView.as_view()),
    path('create', views.RecipesListCreateAPIView.as_view()),
    path('update/<int:pk>', views.RecipesUpdateAPIView.as_view()),
] 

