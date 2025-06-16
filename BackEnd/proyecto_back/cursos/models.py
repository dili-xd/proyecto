from django.db import models

# Create your models here.
class Curso(models.Model):
    DIFICULTAD_OPCIONES = {
        ('principiante','Principiante'),
        ('medio','Medio'),
        ('avanzado','Avanzado'),
    }
    titulo=models.CharField(max_length=50)
    descripcion=models.CharField(max_length=500)
    nivel=models.CharField(choices=DIFICULTAD_OPCIONES, max_length=50)
    img = models.TextField (blank=True, null=True)

class Juegos(models.Model):
    DIFICULTAD_OPCIONES = {
        ('facil','Facil'),
        ('intermedio','Intermedio'),
        ('dificil','Dificil'),
    }
    nombre=models.CharField(max_length=50)
    descripcion=models.CharField(max_length=500)   
    dificultad=models.CharField(choices=DIFICULTAD_OPCIONES, max_length=50)
    img = models.TextField (blank=True, null=True)