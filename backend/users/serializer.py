from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            'id', 'username', 'email', 'first_name', 'last_name', 'phone', 'city', 'area', 
            'postal_code', 'street', 'building_number', 'floor_number', 'apartment_number'
        ]
        extra_kwargs = {'password': {'write_only': True}}
        read_only_fields = ['id']

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user

    def update(self, instance, validated_data):
        instance.username = validated_data.get('username', instance.username)
        instance.first_name = validated_data.get('first_name', instance.first_name)
        instance.last_name = validated_data.get('last_name', instance.last_name)
        instance.email = validated_data.get('email', instance.email)
        instance.phone = validated_data.get('phone', instance.phone)
        instance.city = validated_data.get('city', instance.city)
        instance.area = validated_data.get('area', instance.area)
        instance.postal_code = validated_data.get('postal_code', instance.postal_code)
        instance.street = validated_data.get('street', instance.street)
        instance.building_number = validated_data.get('building_number', instance.building_number)
        instance.floor_number = validated_data.get('floor_number', instance.floor_number)
        instance.apartment_number = validated_data.get('apartment_number', instance.apartment_number)
        
        # Handle password separately to ensure hashing
        password = validated_data.get('password')
        if password:
            instance.set_password(password)

        instance.save()
        return instance
