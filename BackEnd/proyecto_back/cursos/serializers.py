from rest_framework import serializers
from .models import Curso, Juegos

class CursoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Curso
        fields = '__all__'


class JuegosSerializer(serializers.ModelSerializer):
    class Meta:
        model= Juegos
        fields = '__all__'