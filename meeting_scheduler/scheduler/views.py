from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from .models import Availability, Reservation
from .serializers import *
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView



class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)

        serializer = UserSerializerWithToken(self.user).data
        for k, v in serializer.items():
            data[k] = v
        return data
    
    

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


@api_view(['GET'])
def list_availabilities(request):
    availabilities = Availability.objects.all().order_by('start')
    serializer = AvailabilitySerializer(availabilities, many=True)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAdminUser])
def list_reservation(request):
    reservations = Reservation.objects.all().order_by('start')
    serializer = ReservationSerializer(reservations, many=True)
    return Response(serializer.data)

@api_view(['POST'])
@permission_classes([IsAdminUser])
def create_availability(request):
    serializer = AvailabilitySerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
@permission_classes([IsAdminUser])
def delete_availability(request, availability_id):
    try:
        availability = Availability.objects.get(pk=availability_id)
        availability.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    except Availability.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

@api_view(['POST'])
@permission_classes([IsAdminUser])
def create_reservation(request):
    serializer = ReservationSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def delete_reservation(request, email):
    try:
        reservation = Reservation.objects.get(email=email)
        reservation.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    except Reservation.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)


