from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView, UpdateAPIView, DestroyAPIView 
from .serializers import TestimonioSerializer
from .models import Testimonio
# Create your views here.
class TestimonioCreateView(ListCreateAPIView):
    queryset = Testimonio.objects.all()
    serializer_class = TestimonioSerializer

class TestimonioUpdateView(UpdateAPIView):
    lookup_field = 'id'
    queryset = Testimonio.objects.all()
    serializer_class = TestimonioSerializer

class TestimonioDeleteView(DestroyAPIView):
    lookup_field = 'id'
    queryset = Testimonio.objects.all()
    serializer_class = TestimonioSerializer