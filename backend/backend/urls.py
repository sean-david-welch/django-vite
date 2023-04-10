from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

from . views import RouteList

urlpatterns = [
    path('', RouteList.as_view(), name='home'),
    path('admin/', admin.site.urls, name='admin'),
    path('api/products/', include('products.urls')),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT) 
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)