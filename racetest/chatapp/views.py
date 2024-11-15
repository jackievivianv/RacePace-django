from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

#cálculos de cosas, tu dices en que html se va a renderizar. 

def index_mi_pagina_principal(request):
    return HttpResponse("Hola Jackie")

def sobre_mi(request):
    #return HttpResponse("Mi nombre es Jackie y soy un desastre :)")
    return render(request, "sobremi.html")

def contador(request, numerito):
    numerito = numerito * 1000
    return render(request, "contadorJackie.html", {"numeritomultiplicado": numerito})
