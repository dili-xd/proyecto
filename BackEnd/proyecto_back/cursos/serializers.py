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

class CalificacionCursoSerializer(serializers.ModelSerializer):
    usuario_califica = serializers.CharField(source='usuario.user.username', read_only=True)
    curso_calificado = serializers.CharField(source='curso.titulo', read_only=True)
    class Meta:
        model = Inscripciones
        fields = ['usuario_califica', 'curso', 'calificacion', 'comentario', 'fecha_calificacion']
        