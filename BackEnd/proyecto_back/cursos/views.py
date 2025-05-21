from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView
from .serializers import CursoSerializer
from .models import Curso

class CursoCreateView(ListCreateAPIView):
    queryset = Curso.objects.all()
    serializer_class = CursoSerializer