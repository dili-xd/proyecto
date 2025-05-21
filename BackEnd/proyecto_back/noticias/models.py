from django.db import models

# Create your models here.

class Noticias(models.Model):
    titulo = models.CharField(max_length=50)
    contenido = models.CharField(max_length=500)
    fecha_poblicacion=models.DateField()
    usuario= models.ForeignKey('usuarios.Usuario', on_delete=models.CASCADE)