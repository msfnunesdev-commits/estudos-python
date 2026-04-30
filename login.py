print("olá, seja bem vindo!")

usuario = input("Login: ")
senha = input("senha: ")

if usuario=="admin" and senha=="1234":
    print("Acesso permitido")
else:
    print("Acesso negado")