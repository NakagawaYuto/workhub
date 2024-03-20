from rest_framework import serializers
from .models import Applicants, Post


class ApplicantsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Applicants
        fields = '__all__'


class PostSerializer(serializers.ModelSerializer):
    applicants = ApplicantsSerializer(many=True, read_only=True)

    class Meta:
        model = Post
        fields = '__all__'
