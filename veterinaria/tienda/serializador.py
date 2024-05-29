# serializers.py

from rest_framework import serializers
from .models import Cliente, Departamento, Ciudad




class ClienteSerializado(serializers.ModelSerializer):
    "documento = DocumentoSerializado()"

    class Meta:
        model = Cliente
        fields = '__all__'



class DepartamentoSerializado(serializers.ModelSerializer):
    class Meta:
        model = Departamento
        fields = ['id', 'nombre_departamento']

class CiudadSerializado(serializers.ModelSerializer):
    class Meta:
        model = Ciudad
        fields = ['id', 'nombre_ciudad', 'departamento']
