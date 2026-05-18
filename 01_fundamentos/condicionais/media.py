N1 = float(input("Informe a nota do teste: "))
N3 = float(input("Informe a nota da prova: "))
N2 = float(input("Informa a nota do trabalho: "))

media = ((N1+N2)+N3)/2


print("A sua média foi: ", ((N1+N2)+N3)/2);

if media >=7:
    print("Aprovado")
else:
    print("Reprovado")