# Generated by Django 5.2 on 2025-06-16 16:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cursos', '0002_alter_curso_nivel_alter_juegos_dificultad'),
    ]

    operations = [
        migrations.AlterField(
            model_name='curso',
            name='nivel',
            field=models.CharField(choices=[('principiante', 'Principiante'), ('avanzado', 'Avanzado'), ('medio', 'Medio')], max_length=50),
        ),
    ]
