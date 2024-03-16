from django.db import models
from post.models import Post


class Applicants(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    applicant = models.CharField(max_length=50, default="")
