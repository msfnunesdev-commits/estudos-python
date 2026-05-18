N1 = float (input("Informe a nota do simulado: "))
N2 = float (input("Informe a nota do teste: "))
N3 = float (input("Informe a nota da prova: "))

media = (N1+N2+N3)/3


print(f"A sua média foi  {round(media, 2)}")
if media >= 7:
    print("Aprovado!")
else:
    print("Reprovado!")


