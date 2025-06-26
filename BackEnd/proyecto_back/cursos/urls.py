from django.urls import path
from .views import CursoCreateView, JuegoCreateView,CursoDeleteView,CursoUpdateView, JuegoDeleteView, JuegoUpdateView,InscripcionCreateView,CalificarCursoCreateView
from .views import CalificarJuegoCreateView,InscripcionCreateView,CursoPorIDView,JuegoPorIDView,CalificarCursoDeleteView,CalificarCursoUpdateView,CalificarJuegoUpdateView,CalificarJuegoDeleteView

urlpatterns = [
    # URL cursos
    path('cursos/',CursoCreateView.as_view()),
    path('eliminar_curso/<int:id>/', CursoDeleteView.as_view()),
    path('actualizar_curso/<int:id>/', CursoUpdateView.as_view()),
    path('inscribir_curso/', InscripcionCreateView.as_view()),
    path('curso/<int:id>/',CursoPorIDView.as_view()),
    path("calificar_curso/",CalificarCursoCreateView.as_view()),
    path("editar_calificacion_curso/<int:id>/",CalificarCursoUpdateView.as_view()),
    path("eliminar_calificacion_curso/<int:id>/",CalificarCursoDeleteView.as_view()),
    path("editar_calificacion_juego/<int:id>/",CalificarJuegoUpdateView.as_view()),
    path("eliminar_calificacion_juego/<int:id>/",CalificarJuegoDeleteView.as_view()),
    
    path("calificar_juego/",CalificarJuegoCreateView.as_view()),

    # URL juegos
    path('juegos/',JuegoCreateView.as_view()),
    path('eliminar_juego/<int:id>/', JuegoDeleteView.as_view()),  
    path('actualizar_juego/<int:id>/', JuegoUpdateView.as_view()),
    path("juego/<int:id>/",JuegoPorIDView.as_view()),

    # URL inscripciones
    path("inscripciones/", InscripcionCreateView.as_view())
]
