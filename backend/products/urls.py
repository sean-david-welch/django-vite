from django.urls import path
from . import views

urlpatterns = [
    path('', views.ProductList.as_view(), name='product-list'),
    path('create-payment-intent/', views.ProcessPayment.as_view(), name='create-payment-intent'),

    path('<str:pk>/', views.ProductDetail.as_view(), name='product-detail'),
    path('webhooks/', views.stripe_webhook, name='stripe-webhook'),
]
