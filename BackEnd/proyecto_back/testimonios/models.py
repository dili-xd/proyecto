from django.db import models

# Create your models here.
class Testimonio(models.Model):
    contenido = models.CharField(max_length=500)
    fecha = models.DateField()
    usuario = models.ForeignKey ('usuarios.Usuario', on_delete=models.CASCADE)