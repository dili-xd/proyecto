from django.urls import path
from .views import CursoCreateView, JuegoCreateView

urlpatterns = [
    path('cursos/',CursoCreateView.as_view()),
    path('juegos/',JuegoCreateView.as_view())
]
