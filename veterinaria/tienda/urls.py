from django.urls import path, include
from rest_framework import routers
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from .views import LoginView, VistasCliente, Departamentos, Ciudades

# Con este módulo se documenta la API
from rest_framework.documentation import include_docs_urls

router = routers.DefaultRouter()
router.register(r'cliente', VistasCliente, basename='cliente')
router.register(r'departamentos', Departamentos, basename='departamentos')
router.register(r'ciudades', Ciudades, basename='ciudades')

urlpatterns = [
    path('api/v1/', include(router.urls)),
    path('api/v1/login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/v1/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('docs/', include_docs_urls(title='API tienda'))
]
