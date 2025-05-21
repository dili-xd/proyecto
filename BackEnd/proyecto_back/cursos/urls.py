from django.urls import path
from .views import CursoCreateView

urlpatterns = [
    path('cursos/',CursoCreateView.as_view())
]
