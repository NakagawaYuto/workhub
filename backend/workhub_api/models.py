from django.db import models
from django.utils import timezone


class Post(models.Model):
    title = models.CharField(max_length=255)
    hostname = models.CharField(max_length=100)
    deadline = models.DateTimeField(default=timezone.now)
    date_and_location = models.TextField(max_length=10, null=True, blank=True)
    num_of_people = models.PositiveSmallIntegerField(null=True, blank=True)
    estimated_time = models.PositiveSmallIntegerField(null=True, blank=True)
    target = models.TextField(max_length=10, default="")
    tag = models.TextField(max_length=10, null=True, blank=True)
    body = models.TextField(max_length=10, default="")
    data_added = models.DateField(auto_now_add=True)

    class Meta:
        ordering = ["-data_added"]


class Applicants(models.Model):
    post_id = models.ForeignKey(Post, on_delete=models.CASCADE)
    applicant_name = models.CharField(max_length=50, default="")
