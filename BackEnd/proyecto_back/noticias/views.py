from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView,UpdateAPIView,DestroyAPIView
from .models import Noticias
from .serializers import NoticiasSerializer


# Create your views here.
class NoticiasListView(ListCreateAPIView):
    queryset=Noticias.objects.all()
    serializer_class=NoticiasSerializer

class NoticiasUpdateView(UpdateAPIView):
    lookup_field = 'id'
    queryset = Noticias.objects.all()
    serializer_class = NoticiasSerializer

class NoticiasDeleteView(DestroyAPIView):
    lookup_field = 'id'
    queryset = Noticias.objects.all()
    serializer_class = NoticiasSerializer
