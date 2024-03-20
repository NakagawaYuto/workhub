from django.db import models
from post.models import Post


class Applicants(models.Model):
    post_id = models.ForeignKey(Post, on_delete=models.CASCADE)
    applicant_name = models.CharField(max_length=50, default="")
