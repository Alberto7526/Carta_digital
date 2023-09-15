from django.urls import path
from rest_framework.routers import DefaultRouter 
from apps.users.api.views import UserApiViewSet,UserView
# se utiliza para el login 
from rest_framework_simplejwt.views import TokenObtainPairView

from django.urls import path 

router_user = DefaultRouter()

router_user.register(
    prefix = 'users', basename = 'users', viewset = UserApiViewSet
)

# agregamos la ruta 

urlpatterns = [
    path('auth/login/', # ruta para el login autenticación por token
         TokenObtainPairView.as_view(), 
         name='token_obtain_pair'),
    path('auth/me/',
         UserView.as_view()) 
]