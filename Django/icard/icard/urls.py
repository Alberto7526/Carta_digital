from django.contrib import admin
from django.urls import path, include
# importaciones para la documentación automatica
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

from apps.users.api.router import router_user

# generamos el esquema para la documentación 

schema_view = get_schema_view(
   openapi.Info(
      title="Icard - apiDoc",
      default_version='v1',
      description="Documentación de la Api de Icard",
      terms_of_service="https://www.google.com/policies/terms/", 
      contact=openapi.Contact(email="alberto7526@gmail.com"),
      license=openapi.License(name="BSD License"),
   ),
   public=True,
)

urlpatterns = [
    path('admin/', 
         admin.site.urls),
    # geberamos las url de la documentación 
    path('docs/',
         schema_view.with_ui('swagger', cache_timeout=0),
         name='schema-swagger-ui'),
    path('redocs/', 
         schema_view.with_ui('redoc', cache_timeout=0),
         name='schema-redoc'),
    path('api/', 
         include(router_user.urls)),
    path('api/',
         include('apps.users.api.router'))
]
