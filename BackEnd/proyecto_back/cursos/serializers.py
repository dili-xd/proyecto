from rest_framework import serializers
from .models import Curso, Juegos,Inscripciones

class CursoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Curso
        fields = '__all__'


class JuegosSerializer(serializers.ModelSerializer):
    class Meta:
        model= Juegos
        fields = '__all__'

class InscripcionesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Inscripciones
        fields = '__all__'