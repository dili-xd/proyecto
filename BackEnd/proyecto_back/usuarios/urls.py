from django.urls import path
from .views import UsuarioCreateView, UsuarioLoginView

urlpatterns=[
    path('crear_usuario/',UsuarioCreateView.as_view()),
    path('login_usuario/',UsuarioLoginView.as_view())

]