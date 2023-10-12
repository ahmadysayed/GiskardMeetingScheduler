from django.urls import path
from .views import *

urlpatterns = [
    path('availabilities/', AvailabilityListCreateView.as_view(), name='availability-list-create'),
    path('availabilities/<int:pk>/', AvailabilityDeleteView.as_view(), name='availability-delete'),
    path('reservations/', ReservationListCreateView.as_view(), name='reservation-list-create'),
    path('reservations/<int:pk>/', ReservationDeleteView.as_view(), name='reservation-delete'),
]
