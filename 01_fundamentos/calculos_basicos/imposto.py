print ("===Calculadora de impostos===")

eletronicos = float(input("Quanto em dolár você gastou em eletrônicos? $"))

imposto = ((eletronicos * 60)/100)

real = (eletronicos * 5.94)

print (f"*** O valor de imposto pago será ${round(imposto, 2)} em dolar. ***")

print (f"*** O valor em reais será R$ {round(real, 2)}. ***" )