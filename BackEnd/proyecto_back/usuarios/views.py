from django.shortcuts import render
from rest_framework.views import APIView
from django.contrib.auth.models import User   
from rest_framework.response import Response  
from .models import Usuario
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken


# Create your views here.
class UsuarioCreateView(APIView):
    def post (self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        email= request.data.get('email')
        educacion_academica= request.data.get('educacion_academica')

        if User.objects.filter(username=username).exists():
            return Response({'error':'El nombre de usuario ya existe'},status=400)
        
        if User.objects.filter(email=email).exists():
            return Response({'error':'El correo ya existe'},status=400)
        
        user=User.objects.create_user(
            username=username,
            password=password,
            email=email
        )
        Usuario.objects.create(
            user=user,
            educacion_academica=educacion_academica 
        )
        return Response({'message':'Usuario creado correctamente'},status=201)

class UsuarioLoginView(APIView):
    def post (self,request):
        username= request.data.get('username')
        password=request.data.get('password')
          
        usuario=authenticate(username=username,password=password)
        token_refresh= RefreshToken.for_user(usuario)
        token_access=str(token_refresh.access_token)
        if usuario is None:
            return Response({'message':'Usuario logiado con exito','token':token_access}, status=401)
        else:
            return Response({'error':'Usuario invalido'},status=402)
    
class EditarUsuarioView(APIView):
       def path (self,request,id):
           username= request.data.get('username')
           password= request.data.get('password')
           email= request.date.get('email')
           educacion_academica=request.data.get('educacion_academica')  

           if not id:
               return Response({'error':})
