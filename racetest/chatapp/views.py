from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

#cálculos de cosas, tu dices en que html se va a renderizar. 



def chat(request):
    return render(request, "chat.html")



def sobre_mi(request):
    #return HttpResponse("Mi nombre es Jackie :)")
    return render(request, "sobremi.html")

def contador(request, numerito):
    numerito = numerito * 1000
    return render(request, "contadorJackie.html", {"numeritomultiplicado": numerito})

