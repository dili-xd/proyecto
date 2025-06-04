from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView
from .serializers import CursoSerializer, JuegosSerializer
from .models import Curso,Juegos
from rest_framework.permissions import BasePermission, SAFE_METHODS

class PermisoAcceso(BasePermission):
    def has_object_permission(self, request, view):
        usuario = request.user

        if not usuario.is_authenticated:
            return False
        
        grupos_permisos = usuario.groups.values_list('name', flat=True)
        metodo = request.method

        if 'profesores' in grupos_permisos:
            if metodo in SAFE_METHODS:
                return True
            return False
        


class CursoCreateView(ListCreateAPIView):
    permission_classes=[PermisoAcceso]
    queryset = Curso.objects.all()
    serializer_class = CursoSerializer

class JuegoCreateView(ListCreateAPIView):
    queryset = Juegos.objects.all()
    serializer_class = JuegosSerializer