from django.shortcuts import render
from rest_framework.views import APIView
from django.contrib.auth.models import User   
from rest_framework.response import Response  
from .models import Usuario
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth.models import Group,User

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
        grupos=Group.objects.all()

        try:
            grupoUsuario=Group.objects.get(name='usuarios')
            user.groups.add(grupoUsuario)

        except Group.DoesNotExist:
         return Response({'error':'Grupo no existe'},status=400)

        return Response({'message':'Usuario creado correctamente'},status=201)

class UsuarioLoginView(APIView):
    def post (self,request):
        username= request.data.get('username')
        password=request.data.get('password')
          
        usuario=authenticate(username=username,password=password)
        if usuario is not None:
            token_refresh = RefreshToken.for_user(usuario)
            token_acess = str (token_refresh.access_token)
            return Response({'message':'Usuario logiado con exito', 'token':token_acess},status=200)
        else:
            return Response({'error':'Usuario invalido'},status=400)
    
class EditarUsuarioView(APIView):
       def path (self,request,id):
           username= request.data.get('username')
           password= request.data.get('password')
           email= request.date.get('email')
           educacion_academica=request.data.get('educacion_academica')  

           if not id:
               return Response({'error':'Se necesita el id'},status=400)
           
           try:
               user=User.objects.get(id=id)
           except User.DoesNotExist:
               return Response({'error':'Usuario no existe'},status=400)
           
           if username:
               user .username=username
           if email:
               user.email=email
           if password:
               user.set_password(password)
           if educacion_academica:
               user.User.educacion_Academica=educacion_academica

           user.save()

           return Response ({'message':'Usuario editado'},status=200)


