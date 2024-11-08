from django.contrib.auth.models import AbstractUser
from django.db import models
from django.core.validators import RegexValidator

class User(AbstractUser):
    email = models.EmailField(unique=True)  # Email is used for login
    phone_regex = RegexValidator(
        regex=r'^01[0-2,5]{1}[0-9]{8}$',
        message="Phone number must be a valid 11-digit Egyptian mobile number starting with 01."
    )
    phone = models.CharField(validators=[phone_regex], max_length=11, unique=True, null=True, blank=True)
    city = models.CharField(max_length=50)
    area = models.CharField(max_length=50)
    postal_code = models.CharField(max_length=10)
    street = models.CharField(max_length=100)
    building_number = models.CharField(max_length=10)
    floor_number = models.CharField(max_length=10)
    apartment_number = models.CharField(max_length=10)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username', 'first_name', 'last_name']  

    def __str__(self):
        return self.email
