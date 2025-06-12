from django.urls import path
from .views import NoticiasListView,NoticiasDeleteView,NoticiasUpdateView
urlpatterns =[
    path ('noticias/', NoticiasListView.as_view()),
    path ('actualizar_noticia/<int:id>/', NoticiasUpdateView.as_view()),
    path ('eliminar_noticia/<int:id>/', NoticiasDeleteView.as_view())
]