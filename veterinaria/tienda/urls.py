from django.urls import path, include
from rest_framework import routers
from . import views

router =routers.DefaultRouter()
router.register(r'cliente', views.VistasCliente, basename='cliente')
urlpatterns = [
    path('api/v1/', include(router.urls), name='cliente')
]