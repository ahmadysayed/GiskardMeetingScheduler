from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Availability(models.Model):
    start = models.DateTimeField()
    end = models.DateTimeField()

    def __str__(self):
        return str(self.start)

class Reservation(models.Model):
    start = models.DateTimeField()
    end = models.DateTimeField()
    title = models.CharField(max_length=200)
    email = models.EmailField()

    def __str__(self):
        return self.title
