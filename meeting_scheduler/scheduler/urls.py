from django.urls import path
from .views import *

urlpatterns = [
    path('login/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('availabilities/', list_availabilities, name='list_availabilities'),
    path('reservations/', list_reservation, name='list_reservations'),
    path('availabilities/create/', create_availability, name='create_availability'),
    path('availabilities/delete/<int:availability_id>/', delete_availability, name='delete_availability'),
    path('reservations/create/', create_reservation, name='create_reservation'),
    path('reservations/delete/<str:email>/', delete_reservation, name='delete_reservation'),
]
