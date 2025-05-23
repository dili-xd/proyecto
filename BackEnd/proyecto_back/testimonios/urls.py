from django.urls import path
from .views import TestimonioCreateView
urlpaterns=[
    path ('testimonio/',TestimonioCreateView.as_view())
]
