from rest_framework import serializers
from .models import Noticias, CalificacionNoticia

class NoticiasSerializer(serializers.ModelSerializer):
    usuario_nombre = serializers.CharField(source='usuario.username', read_only=True)

    class Meta:
        model=Noticias
        fields=['id','titulo', 'contenido','fecha_poblicacion','usuario','usuario_nombre',"img"]
        

class CalificacionNoticiaSerializer(serializers.ModelSerializer):
    usuario_califica = serializers.CharField(source='usuario.username', read_only=True)
    noticia_calificado = serializers.CharField(source='noticia.titulo', read_only=True)
    class Meta:
        model = CalificacionNoticia
        fields = ['id','usuario_califica', 'noticia', 'calificacion', 'comentario', 'fecha_calificacion','usuario','noticia_calificado']
                