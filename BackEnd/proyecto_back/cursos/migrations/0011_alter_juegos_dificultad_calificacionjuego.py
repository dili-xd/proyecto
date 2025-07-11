# Generated by Django 5.2 on 2025-06-23 16:00

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cursos', '0010_alter_curso_nivel_alter_juegos_dificultad_and_more'),
        ('usuarios', '0002_usuario_img'),
    ]

    operations = [
        migrations.AlterField(
            model_name='juegos',
            name='dificultad',
            field=models.CharField(choices=[('dificil', 'Dificil'), ('facil', 'Facil'), ('intermedio', 'Intermedio')], max_length=50),
        ),
        migrations.CreateModel(
            name='CalificacionJuego',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('calificacion', models.IntegerField(default=0)),
                ('comentario', models.TextField(blank=True, null=True)),
                ('fecha_calificacion', models.DateTimeField(auto_now_add=True)),
                ('juego', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='cursos.juegos')),
                ('usuario', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='usuarios.usuario')),
            ],
        ),
    ]
