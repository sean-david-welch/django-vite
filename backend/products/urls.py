from django.urls import path
from . import views
from . import utils

urlpatterns = [
    path('', views.ProductList.as_view(), name='product-list'),
    path('<str:pk>/', views.ProductDetail.as_view(), name='product-detail'),

    path('create-payment-intent/', views.process_payment, name='create-payment-intent'),
]
