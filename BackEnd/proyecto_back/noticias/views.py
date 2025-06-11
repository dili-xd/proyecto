from django.shortcuts import render
from rest_framework.generics import ListAPIView,UpdateAPIView,DesroyAPIView
from .models import Noticias
from .serializers import NoticiasSerializer


# Create your views here.
class NoticiasListView(ListAPIView):
    queryset=Noticias.objects.all()
    serializer_class=NoticiasSerializer

class NoticiasUpdateView(UpdateAPIView):
    lookup_field = 'id'
    queryset = Noticias.objects.all()
    serializer_class = NoticiasSerializer

class NoticiasDeleteView(DesroyAPIView):
    lookup_field = 'id'
    queryset = Noticias.objects.all()
    serializer_class = NoticiasSerializer
