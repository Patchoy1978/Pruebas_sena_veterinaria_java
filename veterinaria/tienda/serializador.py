from rest_framework import serializers
from . import models


class ClienteSerializado(serializers.ModelSerializer):
    class Meta:
        model = models.Cliente
        fields = '__all__'