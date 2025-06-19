from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Usuario (models.Model):
    user=models.OneToOneField(User, on_delete=models.CASCADE)
    educacion_academica=models.BooleanField(default=False)
    img = models.TextField(default='')
    def __str__(self):
        return self.user.username

class Usuarios_Cursos(models.Model):
    usuario=models.ForeignKey(Usuario, on_delete=models.CASCADE)
    curso=models.ForeignKey('cursos.Curso', on_delete=models.CASCADE)


class Usuarios_Testimonios(models.Model):
    usuario= models.ForeignKey(Usuario, on_delete=models.CASCADE)
    testimonio=models.ForeignKey('testimonios.Testimonio', on_delete=models.CASCADE)