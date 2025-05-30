# Generated by Django 5.2 on 2025-05-21 21:03

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Curso',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('titulo', models.CharField(max_length=50)),
                ('descripcion', models.CharField(max_length=500)),
                ('nivel', models.CharField(choices=[('medio', 'Medio'), ('avanzado', 'Avanzado'), ('principiante', 'Principiante')], max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Juegos',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=50)),
                ('descripcion', models.CharField(max_length=500)),
                ('dificultad', models.CharField(choices=[('dificil', 'Dificil'), ('intermedio', 'Intermedio'), ('facil', 'Facil')], max_length=50)),
            ],
        ),
    ]
