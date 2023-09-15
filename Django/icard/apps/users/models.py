from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    '''
    Permite moduficar la estructura del usuario y hacer el ingreso con el email en /admin
    '''
    email = models.EmailField(unique=True)
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

