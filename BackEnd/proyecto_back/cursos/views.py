from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView
from .serializers import CursoSerializer, JuegosSerializer
from .models import Curso,Juegos

class CursoCreateView(ListCreateAPIView):
    queryset = Curso.objects.all()
    serializer_class = CursoSerializer

class JuegoCreateView(ListCreateAPIView):
    queryset = Juegos.objects.all()
    serializer_class = JuegosSerializer