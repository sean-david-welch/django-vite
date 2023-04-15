from rest_framework import serializers
from .models import Product
from rest_framework.relations import HyperlinkedIdentityField

class ProductSerializer(serializers.ModelSerializer):
    id = serializers.UUIDField()
    url = HyperlinkedIdentityField(view_name='product-detail')

    class Meta:
        model = Product
        fields = '__all__'
