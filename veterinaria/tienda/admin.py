from django.contrib import admin
from . import models

@admin.register(models.Cliente)
class ClienteAdmin(admin.ModelAdmin):
    list_display = ['nombre_completo','ciudad', 'departamento', 'direccion']
    autocomplete_fields = ['departamento', 'ciudad']

    def nombre_completo(self, cliente):
        n_completo = f'{cliente.primer_nombre} {cliente.primer_apellido}'
        return n_completo


@admin.register(models.Ciudad)
class CiudadAdmin(admin.ModelAdmin):
    search_fields = ['nombre_ciudad']

@admin.register(models.Departamento)
class CiudadAdmin(admin.ModelAdmin):
    search_fields = ['nombre_departamento']