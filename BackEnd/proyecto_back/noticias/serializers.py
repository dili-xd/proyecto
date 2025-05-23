from rest_framework import serializers
from .models import Noticias

class NoticiasSerializer(serializers.ModelSerializer):
    class Meta:
        model=Noticias
        fiedls=['id','contenido','fecha_poblicacion','usuario','usuario_nombre']
        