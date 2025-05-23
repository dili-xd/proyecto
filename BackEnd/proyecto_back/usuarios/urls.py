from django.urls import path
from .views import UsuarioCreateView, UsuarioLoginView,EditarUsuarioView

urlpatterns=[
    path('crear_usuario/',UsuarioCreateView.as_view()),
    path('login_usuario/',UsuarioLoginView.as_view()),
    path('editar_usuario/<int:id>/',EditarUsuarioView.as_view())

]