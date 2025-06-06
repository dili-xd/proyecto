from django.urls import path
from .views import CursoCreateView, JuegoCreateView,CursoDeleteView

urlpatterns = [
    path('cursos/',CursoCreateView.as_view()),
    path('eliminar_curso/<int:id>/', CursoDeleteView.as_view()),
    path('juegos/',JuegoCreateView.as_view())
]
