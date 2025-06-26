from django.urls import path
from .views import NoticiasListView,NoticiasDeleteView,NoticiasUpdateView,CalificarNoticiaCreateView,NoticiaPorIDView
from .views import CalificarNoticiaDeleteView
urlpatterns = [
    path ('noticias/', NoticiasListView.as_view()),
    path ('actualizar_noticia/<int:id>/', NoticiasUpdateView.as_view()),
    path ('eliminar_noticia/<int:id>/', NoticiasDeleteView.as_view()),
    path("calificar_noticia/",CalificarNoticiaCreateView.as_view()),
    path("noticia/<int:id>/",NoticiaPorIDView.as_view()),
    path("eliminar_calificacion_noticia/<int:id>/",CalificarNoticiaDeleteView.as_view())

]