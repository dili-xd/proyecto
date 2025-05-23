from django.urls import path
from .views import NoticiasListView
urlpatterns =[
    path ('noticias/', NoticiasListView.as_view())
]