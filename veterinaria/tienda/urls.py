from django.urls import path, include
from rest_framework import routers

#Con este modulo se documente la API
from rest_framework.documentation import include_docs_urls
from . import views


router =routers.DefaultRouter()
router.register(r'cliente', views.VistasCliente, basename='cliente')
urlpatterns = [
    path('api/v1/', include(router.urls), name='cliente'),
    path('docs/', include_docs_urls(title='API tienda'))
]