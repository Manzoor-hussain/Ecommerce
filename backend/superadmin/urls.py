from django.urls import path,include
from superadmin import views

urlpatterns = [
      path('all-product/', views.AllProduct.as_view()),
      path('single-product/<uuid:pk>', views.ProductDetail.as_view()),
      path('place-order/', views.PostOrder.as_view()),
     
]