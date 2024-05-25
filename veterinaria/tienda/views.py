#funcion para CRUD
from rest_framework import viewsets
from . import serializador
from . import models 

class VistasCliente(viewsets.ModelViewSet):
    serializer_class = serializador.ClienteSerializado
    queryset = models.Cliente.objects.all()
