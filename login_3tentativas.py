tentativas = 0

print("olá, seja bem vindo!")

while tentativas < 3:
    usuario = input("login: ")
    senha = input("senha: ")
    
    if usuario =="admin" and senha =="1234":
        print("Acesso permitido")
        break
    else:
        print("acesso negado!")
    tentativas = tentativas +1

if tentativas == 3:
    print("acesso bloqueado"