from django.urls import path
from .views import UsuarioCreateView, UsuarioLoginView,EditarUsuarioView,UsuarioListView,UsuarioDescativarView
urlpatterns=[
    path('crear_usuario/',UsuarioCreateView.as_view()),
    path('login_usuario/',UsuarioLoginView.as_view()),
    path('editar_usuario/<int:id>/',EditarUsuarioView.as_view()),
    path('todos_usuarios/', UsuarioListView.as_view()),
    path('estado_usuario/<int:id>/',UsuarioDescativarView.as_view()),  

]