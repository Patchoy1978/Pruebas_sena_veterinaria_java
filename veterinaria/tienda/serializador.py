# serializers.py

from rest_framework import serializers
from .models import Cliente, Departamento, Ciudad

"""class DocumentoSerializado(serializers.ModelSerializer):
    class Meta:
        model = Documento
        fields = ['tipo_documento', 'numero_documento']"""



class ClienteSerializado(serializers.ModelSerializer):
    "documento = DocumentoSerializado()"

    class Meta:
        model = Cliente
        fields = '__all__'

    """def create(self, validated_data):
        documento_data = validated_data.pop('documento')
        documento_serializer = DocumentoSerializado(data=documento_data)
        if documento_serializer.is_valid():
            documento = documento_serializer.save()
            cliente = Cliente.objects.create(documento=documento, **validated_data)
            return cliente
        else:
            raise serializers.ValidationError("Error al crear el documento")"""


class DepartamentoSerializado(serializers.ModelSerializer):
    class Meta:
        model = Departamento
        fields = ['id', 'nombre_departamento']

class CiudadSerializado(serializers.ModelSerializer):
    class Meta:
        model = Ciudad
        fields = ['id', 'nombre_ciudad', 'departamento']
