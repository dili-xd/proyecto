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
    descripcion_larga = models.TextField()
    def __str__(self):
        return self.titulo

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

class Inscripciones(models.Model):
    usuario = models.ForeignKey('usuarios.Usuario', on_delete=models.CASCADE)
    curso = models.ForeignKey(Curso, on_delete=models.CASCADE)
    fecha_inscripcion = models.DateTimeField(auto_now_add=True)

class CalificacionCurso(models.Model):
    usuario = models.ForeignKey ('usuarios.Usuario', on_delete=models.CASCADE)  
    curso = models.ForeignKey(Curso, on_delete=models.CASCADE)
    calificacion = models.IntegerField(default=0)
    comentario = models.TextField(blank=True, null=True)
    fecha_calificacion = models.DateTimeField(auto_now_add=True)

class CalificacionJuego(models.Model):
    usuario = models.ForeignKey ('usuarios.Usuario', on_delete=models.CASCADE)  
    juego = models.ForeignKey(Juegos, on_delete=models.CASCADE)
    calificacion = models.IntegerField(default=0)
    comentario = models.TextField(blank=True, null=True)
    fecha_calificacion = models.DateTimeField(auto_now_add=True)
     