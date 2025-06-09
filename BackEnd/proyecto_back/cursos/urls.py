from django.urls import path
from .views import CursoCreateView, JuegoCreateView,CursoDeleteView,CursoUpdateView, JuegoDeleteView, JuegoUpdateView


urlpatterns = [
    # URL cursos
    path('cursos/',CursoCreateView.as_view()),
    path('eliminar_curso/<int:id>/', CursoDeleteView.as_view()),
    path('actualizar_curso/<int:id>/', CursoCreateView.as_view()),
    path('actualizar_curso/<int:id>/', CursoUpdateView.as_view()),
    # URL juegos
    path('juegos/',JuegoCreateView.as_view()),
    path('eliminar_juego/<int:id>/', JuegoDeleteView.as_view()),  
    path('actualizar_juego/<int:id>/', JuegoUpdateView.as_view()),
]
