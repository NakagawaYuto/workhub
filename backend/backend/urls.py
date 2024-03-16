from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('apply/', include('apply.urls')),
    path('post/', include('post.urls'))
]
