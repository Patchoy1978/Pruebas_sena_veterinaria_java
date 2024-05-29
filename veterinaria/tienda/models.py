from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.db import models

class Departamento(models.Model):
    nombre_departamento = models.CharField(max_length=100)

    def __str__(self) -> str:
        return self.nombre_departamento

class Ciudad(models.Model):
    nombre_ciudad = models.CharField(max_length=100)
    departamento = models.ForeignKey(Departamento, on_delete=models.PROTECT)

    def __str__(self) -> str:
        return self.nombre_ciudad
    
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.db import models

class ClienteManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('El email debe ser proporcionado')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        return self.create_user(email, password, **extra_fields)

class Cliente(AbstractBaseUser, PermissionsMixin):
    primer_nombre = models.CharField(max_length=200, null=False)
    segundo_nombre = models.CharField(max_length=200, null=True)
    primer_apellido = models.CharField(max_length=200, null=False)
    segundo_apellido = models.CharField(max_length=200, null=True)
    fecha_nacimiento = models.DateField(null=False)
    email = models.EmailField(unique=True, null=False)
    telefono = models.CharField(max_length=10)
    direccion = models.CharField(max_length=400)
    departamento = models.ForeignKey(Departamento, on_delete=models.PROTECT)
    ciudad = models.ForeignKey(Ciudad, on_delete=models.PROTECT)
    
    CEDULA = 'CC'
    C_EXTRANJERIA = 'CX'
    PASAPORTE = 'PA'
    OPCIONES_DOCUMENTOS = [
        (CEDULA, 'cedula'),
        (C_EXTRANJERIA, 'cedula_extranjeria'),
        (PASAPORTE, 'pasaporte'),  
    ]
    tipo_documento =  models.CharField(max_length=2, choices=OPCIONES_DOCUMENTOS, default=CEDULA)
    numero_documento = models.CharField(max_length=30, unique=True)

    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = ClienteManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    def __str__(self):
        return self.email

    


class TipoProducto(models.Model):
    clase_producto = models.CharField(max_length=255, null=False)
    descripcion = models.TextField()

class Productos(models.Model):
    nombre_producto = models.CharField(max_length=200, null=False)
    descripcion = models.TextField()
    inventario = models.IntegerField()
    precio = models.DecimalField(max_digits=6, decimal_places=2)
    actualizacion = models.DateTimeField(auto_now_add=True)
    clase_producto = models.ForeignKey(TipoProducto, on_delete=models.PROTECT)

class TipoServicio(models.Model):
    clase_servicio = models.CharField(max_length=255)
    descripcion = models.TextField()

class Servicios(models.Model):
    nombre_servicio = models.CharField(max_length=200, null=False)
    descripcion = models.TextField()
    precio = models.DecimalField(max_digits=6, decimal_places=2)
    actualizacion = models.DateTimeField(auto_now_add=True)
    tipo_servicio = models.ForeignKey(TipoServicio, on_delete=models.PROTECT)


class Orden(models.Model):
    ESTADO_PAGO_PENDIENTE = 'P'
    ESTADO_PAGO_COMPLETADO = 'C'
    ESTADO_PAGO_FALLIDO = 'F'
    OPCIONES_ESTADO_PAGO = [
        (ESTADO_PAGO_PENDIENTE, 'pendiente'),
        (ESTADO_PAGO_COMPLETADO, 'completado'),
        (ESTADO_PAGO_FALLIDO, 'fallido'),
    ]
    hora_inicio = models.DateTimeField(auto_now_add=True)
    estado = models.CharField(max_length=1, choices=OPCIONES_ESTADO_PAGO, default=ESTADO_PAGO_PENDIENTE)
    cliente = models.ForeignKey(Cliente, on_delete=models.PROTECT)


class OrdenItem(models.Model):
    orden = models.ForeignKey(Orden, on_delete=models.PROTECT)
    producto = models.ForeignKey(Productos, on_delete=models.PROTECT)
    cantidad = models.PositiveSmallIntegerField()
    precio_unidad = models.DecimalField(max_digits=6, decimal_places=2)

class Carrito(models.Model):
    hora_creacion = models.DateTimeField(auto_now_add=True)

class CarritoItem(models.Model):
    carrito = models.ForeignKey(Carrito, on_delete=models.CASCADE)
    producto = models.ForeignKey(Productos, on_delete=models.CASCADE)
    cantidad = models.PositiveSmallIntegerField()



   