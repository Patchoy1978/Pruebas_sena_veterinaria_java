#funcion para CRUD
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import authenticate


from . import serializador
from .models import Cliente, Departamento, Ciudad

class VistasCliente(viewsets.ModelViewSet):
    serializer_class = serializador.ClienteSerializado
    queryset = Cliente.objects.all()

class Departamentos(viewsets.ModelViewSet):
    serializer_class =serializador.DepartamentoSerializado
    queryset = Departamento.objects.all()

class Ciudades(viewsets.ModelViewSet):
    serializer_class =serializador.CiudadSerializado
    queryset = Ciudad.objects.all()

class LoginView(APIView):
    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('contrasena')
        try:
            user = Cliente.objects.get(email=email)
            if user.contrasena == password:
                return Response({'message': 'Login successful'}, status=status.HTTP_200_OK)
            else:
                return Response({'message': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
        except Cliente.DoesNotExist:
            return Response({'message': 'User not found'}, status=status.HTTP_404_NOT_FOUND)
