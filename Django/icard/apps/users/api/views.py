from rest_framework.viewsets import ModelViewSet 
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from django.contrib.auth.hashers import make_password

from apps.users.models import User
from apps.users.api.serializers import UserSerielizer

class UserApiViewSet(ModelViewSet):
    '''
    Crea el CRUD completo de la tabla user
    '''
    permission_classes = [IsAdminUser] # Protege los endpoint para ser usados unicamente por usuarios admin
    serializer_class = UserSerielizer
    queryset = User.objects.all()
    
    def create(self, request, *args, **kwargs):
        '''
        Esto me permite encriptar la contraseña cuando se usa el metodo post (crear usuario)  con el paquete make_password
        '''
        request.data['password'] = make_password(request.data['password'])
        return super().create(request, *args, **kwargs)
    
    def partial_update(self, request, *args, **kwargs):
        '''
        Esto me permite encriptar la contraseña cuando se actualiza con el metodo PATCH
        '''
        password = request.data['password'] 
        if password:
            request.data['password'] = make_password(request.data['password'])
        else:
            request.data['password'] = request.user.password
        return super().update(request, *args, **kwargs)
    
    def update(self, request, *args, **kwargs):
        '''
        Esto me permite encriptar la contraseña cuando se actualiza con el metodo PATCH
        '''
        password = request.data['password'] 
        if password:
            request.data['password'] = make_password(request.data['password'])
        else:
            request.data['password'] = request.user.password
        return super().update(request, *args, **kwargs)
    
class UserView (APIView):
    '''
    Devuelve los datos de el usuario que esta autenticado (de el mismo), cuando este autenticado
    '''
    permission_classes = [IsAuthenticated]
    
    def get(self, request):
        serializer = UserSerielizer(request.user)
        return Response(serializer.data)
    