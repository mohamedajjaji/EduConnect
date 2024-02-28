from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework import generics
from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import TeacherSerializer
from . import models

class TeacherList(generics.ListCreateAPIView):
    queryset = models.Teacher.objects.all()
    serializer_class = TeacherSerializer
    # permission_classes = [permissions.IsAuthenticated]

class TeacherDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Teacher.objects.all()
    serializer_class = TeacherSerializer
    # permission_classes = [permissions.IsAuthenticated]

@csrf_exempt
def TeacherLogin(request):
    if request.method == 'POST':
        email = request.POST['email']
        password = request.POST['password']
        teacherData = models.Teacher.objects.get(email=email, password=password)
        if teacherData:
            return JsonResponse({'bool': True})
        else:
            return JsonResponse({'bool': False})
    else:
        return JsonResponse({'error': 'Invalid HTTP method'})
    
@csrf_exempt
def Login(request):
    if request.method == 'POST':
        email = request.POST['email']
        password = request.POST['password']
        studentData = models.Student.objects.get(email=email, password=password)
        if studentData:
            return JsonResponse({'bool': True})
        else:
            return JsonResponse({'bool': False})
    else:
        return JsonResponse({'error': 'Invalid HTTP method'})
