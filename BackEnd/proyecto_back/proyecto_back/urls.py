from django.contrib import admin
from django.urls import path,include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('apiCursos/', include('cursos.urls')),
    path('apiUsuarios/', include('usuarios.urls')),
    path('apiNoticias/', include('noticias.urls')),
    path('apiTestimonio/', include('testimonio.urls'))
]
