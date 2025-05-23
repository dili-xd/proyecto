from django.shortcuts import render
from rest_framework.generics import ListAPIView
from .models import Noticias
from .serializers import NoticiasSerializer

# Create your views here.
class NoticiasListView(ListAPIView):
    queryset=Noticias.objects.all()
    serializer_class=NoticiasSerializer
