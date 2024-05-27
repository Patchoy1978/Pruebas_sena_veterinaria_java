from django.urls import path, include
from .views import LoginView
from rest_framework import routers

#Con este modulo se documente la API
from rest_framework.documentation import include_docs_urls
from . import views


router = routers.DefaultRouter()
router.register(r'cliente', views.VistasCliente, basename='cliente')
router.register(r'departamentos', views.Departamentos, basename='departamentos')
router.register(r'ciudades', views.Ciudades, basename='ciudades')

urlpatterns = [
    path('api/v1/', include(router.urls), name='cliente'),
    path('api/v1/login/', LoginView.as_view(), name='login'),
    path('docs/', include_docs_urls(title='API tienda'))
]
