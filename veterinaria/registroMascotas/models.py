from django.db import models
from django.contrib.contenttypes.models import ContentType
from django.contrib.contenttypes.fields import GenericForeignKey

class EspecieMascota(models.Model):
    clase_mascota = models.CharField(max_length=255, null=False)

class Raza(models.Model):
    tipo_raza = models.CharField(max_length=255, null=False)
    especie_mascota = models.ForeignKey(EspecieMascota, on_delete=models.PROTECT)

class Mascota(models.Model):
    nombre_mascota = models.CharField(max_length=255, null=False)
    edad = models.PositiveSmallIntegerField()
    peso = models.PositiveSmallIntegerField()
    tipo_mascota = models.ForeignKey(EspecieMascota, on_delete=models.PROTECT)
    raza = models.ForeignKey(Raza, on_delete=models.PROTECT)
    content_type = models.ForeignKey(ContentType, on_delete=models.CASCADE)
    object_id = models.PositiveIntegerField()
    content_object = GenericForeignKey()


class Vacunas(models.Model):
    nombre_vacuna = models.CharField(max_length=255)
    descripcion = models.TextField()

class VacuanaMascota(models.Model):
    fecha_vacuna = models.DateField()
    mascota = models.ForeignKey(Mascota, on_delete=models.PROTECT)
    vacuna = models.ForeignKey(Vacunas, on_delete=models.PROTECT)

class HistoriClinica(models.Model):
    epicrisis = models.TextField()
    fecha = models.DateField(auto_now=True)
    id_mascota = models.ForeignKey(Mascota, on_delete=models.PROTECT)

class Recetario(models.Model):
    nombre_medicamento = models.CharField(max_length=255, null=False)
    instrucciones = models.TextField()
    presentacion = models.CharField(max_length=100)
    historia = models.ForeignKey(HistoriClinica, on_delete=models.PROTECT)
    mascota = models.ForeignKey(Mascota, on_delete=models.PROTECT)


    



