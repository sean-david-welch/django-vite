from rest_framework.response import Response
from rest_framework.views import APIView

from django.urls import reverse, get_resolver, URLPattern, URLResolver

from django.shortcuts import render
from django.urls import URLPattern, URLResolver, reverse, get_resolver
from rest_framework.views import APIView

class RouteList(APIView):
    def list_routes(self, urlpatterns):
        routes = []

        for url in urlpatterns:
            if isinstance(url, URLPattern) and url.name:
                try:
                    route = {
                        'name': url.name,
                        'url': reverse(url.name)
                    }
                    routes.append(route)
                except Exception:
                    pass
            elif isinstance(url, URLResolver):
                routes += self.list_routes(url.url_patterns)

        return routes

    def get(self, request):
        urlpatterns = get_resolver().url_patterns
        api_routes = self.list_routes(urlpatterns)

        return render(request, 'home.html', {'routes': api_routes})
