from django.db import models
from django.utils import timezone


class Post(models.Model):
    title = models.CharField(max_length=255)
    hostname = models.CharField(max_length=100)  # 投稿する人の名前
    deadline = models.DateTimeField(default=timezone.now)  # 募集期限
    date_and_location = models.TextField(max_length=10, null=True, blank=True)  # 日時・場所
    num_of_people = models.PositiveSmallIntegerField(max_length=10, null=True, blank=True)  # 人数
    estimated_time = models.PositiveSmallIntegerField(max_length=10, null=True, blank=True)  # 見込み労働時間
    target = models.TextField(max_length=10, default="")  # 対象者
    tag = models.TextField(max_length=10, null=True, blank=True)  # タグ
    body = models.TextField(max_length=10, default="")  # 内容
    data_added = models.DateField(auto_now_add=True)

    class Meta:
        ordering = ["-data_added"]
