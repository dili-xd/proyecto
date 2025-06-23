from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView,UpdateAPIView,DestroyAPIView
from .models import Noticias, CalificacionNoticia
from .serializers import NoticiasSerializer, CalificacionNoticiaSerializer
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


# Create your views here.
class NoticiasListView(ListCreateAPIView):
    # permission_classes=[PermisoAcceso]
    queryset=Noticias.objects.all()
    serializer_class=NoticiasSerializer

class NoticiasUpdateView(UpdateAPIView):
    permission_classes=[PermisoAcceso]
    lookup_field = 'id'
    queryset = Noticias.objects.all()
    serializer_class = NoticiasSerializer

class NoticiasDeleteView(DestroyAPIView):
    permission_classes=[PermisoAcceso]
    lookup_field = 'id'
    queryset = Noticias.objects.all()
    serializer_class = NoticiasSerializer

class CalificarNoticiaCreateView(ListCreateAPIView):
    #permission_classes=[PermisoAcceso]
    queryset = CalificacionNoticia.objects.all()
    serializer_class = CalificacionNoticiaSerializer        
                                                                                        