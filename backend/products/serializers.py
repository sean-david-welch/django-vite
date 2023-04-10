from rest_framework import serializers
from .models import Product

class ProductSerializer(serializers.ModelSerializer):
    id = serializers.UUIDField()

    class Meta:
        model = Product
        fields = '__all__'
