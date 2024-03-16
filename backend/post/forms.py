from django import forms
from . models import Post

class PostForm(forms.ModelForm):
    class Meta:
        model = Post
        fields = ['title', 'hostname', 'deadline', 'date_and_location', 'num_of_people', 'estimated_time', 'target', 'tag', 'body', 'date_added']