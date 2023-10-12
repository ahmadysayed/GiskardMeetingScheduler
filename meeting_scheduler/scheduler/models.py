from django.db import models

# Create your models here.

class Availability(models.Model):
    start = models.DateTimeField()
    end = models.DateTimeField()

class Reservation(models.Model):
    start = models.DateTimeField()
    end = models.DateTimeField()
    title = models.CharField(max_length=200)
    email = models.EmailField()
