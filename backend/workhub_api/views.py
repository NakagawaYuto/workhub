from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from .models import Post, Applicants
from .serializer import PostSerializer, ApplicantsSerializer

class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class ApplicantsViewSet(viewsets.ModelViewSet):
    queryset = Applicants.objects.all()
    serializer_class = ApplicantsSerializer