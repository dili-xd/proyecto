from rest_framework import serializers
from .models import Noticias

class NoticiasSerializer(serializers.ModelSerializer):
    usuario_nombre = serializers.CharField(source='usuario.user.username', read_only=True)

    class Meta:
        model=Noticias
        fields=['id','titulo', 'contenido','fecha_poblicacion','usuario','usuario_nombre',"img"]
        