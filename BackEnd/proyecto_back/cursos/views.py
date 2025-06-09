from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView, DestroyAPIView, UpdateAPIView
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
        

     #vistas cursos
class CursoCreateView(ListCreateAPIView):
    permission_classes=[PermisoAcceso]
    queryset = Curso.objects.all()
    serializer_class = CursoSerializer

class CursoDeleteView(DestroyAPIView):
    queryset = Curso.objects.all()
    serializer_class= CursoSerializer
    lookup_field = 'id'    

class CursoUpdateView(UpdateAPIView):
    queryset = Curso.objects.all()
    serializer_class = CursoSerializer
    lookup_field= 'id'

        #vistas juegos

class JuegoCreateView(ListCreateAPIView):
    queryset = Juegos.objects.all()
    serializer_class = JuegosSerializer

class JuegoDeleteView(DestroyAPIView):
    queryset = Juegos.objects.all()
    serializer_class = JuegosSerializer
    lookup_field = 'id'    

class JuegoUpdateView(UpdateAPIView):
    queryset = Juegos.objects.all()
    serializer_class = JuegosSerializer
    lookup_field = 'id'
        