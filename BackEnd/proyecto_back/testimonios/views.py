from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView
from .serializers import TestimonioSerializer
from .models import Testimonio
# Create your views here.
class TestimonioCreateView(ListCreateAPIView):
    queryset = Testimonio.objects.all()
    serializer_class = TestimonioSerializer