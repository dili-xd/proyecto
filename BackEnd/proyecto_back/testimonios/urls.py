from django.urls import path
from .views import TestimonioCreateView
urlpatterns=[
    path ('testimonio/',TestimonioCreateView.as_view())
]
