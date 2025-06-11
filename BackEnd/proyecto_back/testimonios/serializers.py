from rest_framework.serializers import ModelSerializer
from .models import Testimonio
from rest_framework import serializers

class TestimonioSerializer(ModelSerializer):
    usuario_nombre=serializers.CharField(source="usuario.user.username",read_only=True)
    class Meta:
        model=Testimonio
        fields=['id','contenido','fecha','usuario','usuario_nombre']
        