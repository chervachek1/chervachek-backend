from django.db import models
from core.models import BaseModel, BaseImage

from ckeditor.fields import RichTextField


class Post(BaseModel):
    title = models.CharField(max_length=256, blank=True)
    body = RichTextField()

    def __str__(self):
        return self.title


class PostImage(BaseImage):
    post = models.ForeignKey(Post, on_delete=models.CASCADE, null=True, blank=True)