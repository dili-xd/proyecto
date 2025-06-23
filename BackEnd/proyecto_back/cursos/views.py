from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView, DestroyAPIView, UpdateAPIView
from .serializers import CursoSerializer, JuegosSerializer,InscripcionesSerializer, CalificacionCursoSerializer,CalificacionJueegoSerializer  
from .models import Curso,Juegos,Inscripciones, CalificacionCurso,CalificacionJuego
from rest_framework.permissions import BasePermission, SAFE_METHODS 

class PermisoAcceso(BasePermission):
    def has_permission(self, request, view):
        usuario = request.user

        if not usuario.is_authenticated:
            return False
        
        grupos_permisos = usuario.groups.values_list('name', flat=True)
        metodo = request.method

        if 'profesores' in grupos_permisos:
            if metodo in SAFE_METHODS or metodo in ["POST","PUT","PATCH","DELETE"]:
                return True
            return False
        if 'usuarios' in grupos_permisos:
            if metodo in SAFE_METHODS:
                return True
            return False
        if 'administradores' in grupos_permisos:
            return True
        
        return False


     #vistas cursos
class CursoCreateView(ListCreateAPIView):
    # permission_classes=[PermisoAcceso]
    queryset = Curso.objects.all()
    serializer_class = CursoSerializer

class CursoDeleteView(DestroyAPIView):
    permission_classes=[PermisoAcceso]
    queryset = Curso.objects.all()
    serializer_class= CursoSerializer
    lookup_field = 'id'    

class CursoUpdateView(UpdateAPIView):
    permission_classes=[PermisoAcceso]
    queryset = Curso.objects.all()
    serializer_class = CursoSerializer
    lookup_field= 'id'

class InscripcionCreateView(ListCreateAPIView):
    # permission_classes=[PermisoAcceso]
    queryset = Inscripciones.objects.all()
    serializer_class = InscripcionesSerializer

        #vistas juegos

class JuegoCreateView(ListCreateAPIView):
    permission_classes=[PermisoAcceso]
    queryset = Juegos.objects.all()
    serializer_class = JuegosSerializer

class JuegoDeleteView(DestroyAPIView):
    permission_classes=[PermisoAcceso]
    queryset = Juegos.objects.all()
    serializer_class = JuegosSerializer
    lookup_field = 'id'    

class JuegoUpdateView(UpdateAPIView):
    permission_classes=[PermisoAcceso]
    queryset = Juegos.objects.all()
    serializer_class = JuegosSerializer
    lookup_field = 'id'
        
class CalificarCursoCreateView(ListCreateAPIView):
    #permission_classes=[PermisoAcceso]
    queryset = CalificacionCurso.objects.all()
    serializer_class = CalificacionCursoSerializer       

class CalificarJuegoCreateView(ListCreateAPIView):
    #permission_classes=[PermisoAcceso]
    queryset = CalificacionJuego.objects.all()
    serializer_class = CalificacionJueegoSerializer        
                                                                                        