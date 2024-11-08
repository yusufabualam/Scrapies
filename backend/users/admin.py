from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User  

class UserAdmin(UserAdmin):
    model = User
    list_display = ['email', 'first_name', 'last_name', 'is_staff', 'is_active']
    search_fields = ['email', 'first_name', 'last_name']
    ordering = ['email']

admin.site.register(User, UserAdmin)
