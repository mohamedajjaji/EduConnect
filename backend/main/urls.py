from django.urls import path
from .views import TeacherList, TeacherDetail, TeacherLogin, Login

urlpatterns = [
    path('teacher/', TeacherList.as_view(), name='teacher-list'),
    path('teacher/<int:pk>/', TeacherDetail.as_view(), name='teacher-detail'),
    path('teacher-login/', TeacherLogin, name='teacher-login'),
    path('login/', Login, name='login'),
]
