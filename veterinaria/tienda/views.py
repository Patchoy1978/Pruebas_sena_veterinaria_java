from rest_framework import viewsets
from django.contrib.auth import authenticate, login
from django.contrib.auth.hashers import make_password
from django.http import JsonResponse

from django.utils.decorators import method_decorator
from django.views import View
import json

from . import serializador
from .models import Cliente, Departamento, Ciudad


class VistasCliente(viewsets.ModelViewSet):
    serializer_class = serializador.ClienteSerializado
    queryset = Cliente.objects.all()

    def perform_create(self, serializer):
        # Obtener la contraseña sin hashear del request
        password = self.request.data.get('password')
        # Hashear la contraseña
        hashed_password = make_password(password)
        # Establecer la contraseña hasheada en el serializer
        serializer.validated_data['password'] = hashed_password
        # Llamar al método perform_create del serializer
        super().perform_create(serializer)


class Departamentos(viewsets.ModelViewSet):
    serializer_class = serializador.DepartamentoSerializado
    queryset = Departamento.objects.all()
    

class Ciudades(viewsets.ModelViewSet):
    serializer_class = serializador.CiudadSerializado
    queryset = Ciudad.objects.all()


class LoginView(View):
    def post(self, request):
        data = json.loads(request.body)
        email = data.get('email')
        password = data.get('password')
        user = authenticate(request, email=email, password=password)
        if user is not None:
            login(request, user)
            return JsonResponse({'mensaje': 'Inicio de sesión exitoso'})
        else:
            return JsonResponse({'error': 'Credenciales inválidas'}, status=400)
