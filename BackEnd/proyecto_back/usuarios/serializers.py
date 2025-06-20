from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from .models import Usuario


class UsuarioSerializer(ModelSerializer):
    username= serializers.CharField(source="user.username", read_only=True)
    email = serializers.EmailField(source="user.email", read_only=True)
    date_joined = serializers.DateTimeField(source="user.date_joined", read_only=True)
    user_id = serializers.IntegerField(source="user.id", read_only=True)

    class Meta:
        model = Usuario
        fields = ['id', 'username', 'email', 'date_joined', 'educacion_academica', 'user_id','img']