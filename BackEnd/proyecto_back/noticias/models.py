from django.db import models

# Create your models here.

class Noticias(models.Model):
    titulo = models.CharField(max_length=50)
    contenido = models.CharField(max_length=500)
    fecha_poblicacion=models.DateField()
    usuario= models.ForeignKey('usuarios.Usuario', on_delete=models.CASCADE)
    img = models.TextField(blank=True, null=True)
    def __str__(self):
        return self.titulo
    
class CalificacionNoticia(models.Model):
    usuario = models.ForeignKey ('usuarios.Usuario', on_delete=models.CASCADE)  
    noticia = models.ForeignKey(Noticias, on_delete=models.CASCADE)
    calificacion = models.IntegerField(default=0)
    comentario = models.TextField(blank=True, null=True)
    fecha_calificacion = models.DateTimeField(auto_now_add=True)


