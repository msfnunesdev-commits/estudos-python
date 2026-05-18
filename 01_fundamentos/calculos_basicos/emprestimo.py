print(" *** ConsigFacil ***")

emp = float(input("Qual valor você desejaria pegar emprestado? R$ "))
parc = int(input("Quantas parcelas você deseja pagar? "))

total = emp*1.2
parcela = total/parc
juros = total-emp

print(f"*** O valor das parcelas serão R$ {round(parcela, 2)} ***")
print(f"*** Você pagará ao final do contrato R$ {round(total, 2)} ***")
print(f"*** O total de juros ao final do contrato foi R$ {round(juros, 2)}. ***")