from django.urls import path
from .views import TestimonioCreateView,TestimonioUpdateView,TestimonioDeleteView
urlpatterns=[
    path ('testimonio/',TestimonioCreateView.as_view()),
    path ('eliminar_testimonio/<int:id>/', TestimonioDeleteView.as_view()),
    path ('actualizar_testimonio/<int:id>/', TestimonioUpdateView.as_view())    
]
