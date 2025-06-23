from rest_framework import serializers
from .models import Noticias, CalificacionNoticia

class NoticiasSerializer(serializers.ModelSerializer):
    usuario_nombre = serializers.CharField(source='usuario.user.username', read_only=True)

    class Meta:
        model=Noticias
        fields=['id','titulo', 'contenido','fecha_poblicacion','usuario','usuario_nombre',"img"]
        

class CalificacionNoticiaSerializer(serializers.ModelSerializer):
    usuario_califica = serializers.CharField(source='usuario.user.username', read_only=True)
    noticia_calificado = serializers.CharField(source='noticia.nombre', read_only=True)
    class Meta:
        model = CalificacionNoticia
        fields = ['id','usuario_califica', 'noticias', 'calificacion', 'comentario', 'fecha_calificacion','usuario','noticias_calificado']
                