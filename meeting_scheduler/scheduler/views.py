from rest_framework import generics
from .models import Availability, Reservation
from .serializers import AvailabilitySerializer, ReservationSerializer


# Create your views here.

class AvailabilityListCreateView(generics.ListCreateAPIView):
    queryset = Availability.objects.all()
    serializer_class = AvailabilitySerializer

class AvailabilityDeleteView(generics.DestroyAPIView):
    queryset = Availability.objects.all()
    serializer_class = AvailabilitySerializer

class ReservationListCreateView(generics.ListCreateAPIView):
    queryset = Reservation.objects.all()
    serializer_class = ReservationSerializer

class ReservationDeleteView(generics.DestroyAPIView):
    queryset = Reservation.objects.all()
    serializer_class = ReservationSerializer
