import time
import random
import oracledb
import json
import requests


# Foi importada a biblioteca "time" para permitir execução de códigos que envolvam manipulação
# de tempo, como fazer o usuário esperar para realizar novas tentativas de login.
# a Biblioteca random foi importada para permitir algumas simulações de cenários reais, como por exemplo,
# simular possíveis defeitos que poderiam ser mostrados ao usuário quando for realizada a inspeção

# Para casos em que o usuário terá que realizar uma escolha no menu interativo e o mesmo digitar uma
# entrada inválida

def exportar_json(cursor):
    
        sql = f"SELECT * FROM tbl_veiculos"
        cursor.execute(sql)
        
        columns = [col[0] for col in cursor.description]

        resultados = cursor.fetchall()


        dic_veiculos = {col: [] for col in columns}

        for row in resultados:
            for col, value in zip(columns, row):
                dic_veiculos[col].append(value)

        consulta_json = json.dumps(dic_veiculos, sort_keys =True, indent=2)

        with open ('consulta.json', 'w') as file:
            file.write(consulta_json)

        cursor.close()
    
   
    


def  conecta_db():
    try:
        connection = oracledb.connect("rm558987/111204@oracle.fiap.com.br:1521/ORCL")
        return connection
    except Exception as e:
        return f"Erro ao conectar ao banco de dados: {e}"

# Para o usuário ter acesso a informações de um veículo específico e ter acesso a manipulações desse veículo, ou seja, poder acessar o método update e delete
def get_veiculo_especifico():
    
    print(f"\nInforme o chassi do veículo que você deseja visuzalizar:\n\n")
    
    chassi = entrada_valor()
    
    connection = conecta_db()
    cursor = connection.cursor()
    
    try:
        sql = f"SELECT * FROM tbl_veiculos WHERE chassi = '{chassi}'"
        cursor.execute(sql)
        
        print(cursor.fetchone())
        
    except Exception as e:
        print(f"Erro ao consultar veículo: {e}")
        
    finally:
        print(f"\n\n1 - Editar veículo\t2 - Utilizar serviços\t3 - Voltar ao menu inicial")
        cursor.close()
        
        escolha = entrada_valor_numerico()
        escolha = erro_entrada(escolha, 3)
        
        if (escolha == 1):
            editar_veiculo(chassi)
        
        elif (escolha == 2): 
            servicos_veiculo()
        
        else:
            pass
        
        
         
    
# Possibilita o usuário de Editar ou Excluir um veículo, utilizando outros dois métodos do CRUD (Update e Delete)
def editar_veiculo(chassi):
    print(f"Aqui você pode editar as informações do seu veículo ou excluir seu veículo.\n1 - Editar\t2 - Excluir")
    
    escolha = entrada_valor_numerico()
    escolha = erro_entrada(escolha, 2)
        
    if (escolha == 1):
        update_veiculo(chassi)
        
    else: 
        delete_veiculo(chassi)

def servicos_veiculo():
            print(f"Qual serviço você gostaria de acessar para seu veículo?\n"
                                +f"1 -> Localizar veículo\n"
                                +f"2 -> Inspecionar erros do veículo\n")

            escolha = entrada_valor_numerico()

            escolha = erro_entrada(escolha, 2)
            # Funcionalidade 2 -> Localizar veículo
            resposta = random.randrange(1,  5)
            if escolha == 1:
                match resposta:
                    case 1: print(f"Seu veículo foi localizado em:\nBrasil - SP - São Paulo - Vila Mariana - Rua Vergueiro")
                    case 2: print(f"Seu veículo foi localizado em:\nBrasil - SP - São Paulo - Pinheiros - Avenida Faria Lima")
                    case 3: print(f"Seu veículo foi localizado em:\nBrasil - SP - São Paulo - Moema - Rua Gaivota")
                    case 4: print(f"Seu veículo foi localizado em:\nBrasil - SP - Santo André - Jardim Bela Vista - Rua Catequese")
                    case 5: print(f"Seu veículo foi localizado em:\nBrasil - SP - Campinas - Cambuí - Rua Coronel Quirino")
                    

            # Funcionalidade 3 -> Inspecionar erros do veículo
            elif escolha == 2:
                 # lista dos possíveis erros que um usuário poderia ter
                 erros = ["Nenhum", "embreagem", "correia", "cambio", "motor"]
                 # variável para pegar itens (erros) aleatórios da lista de erros.
                 # foi subtraído o valor 2 da lista para evitar que seja sorteado um
                 # index inexistente na lista
                 numerosErros = random.randint(0, len(erros) -2)
                 # se o elemento "nenhum" entrar para o "numeroErros" de primeira, significa que
                 # um possível erro já foi identificado, então o item "nenhum" será retirado da lista
                 # e serão levados em consideração apenas os elementos restantes, que são os erros de fato
                 if erros[numerosErros] != erros[0]:
                    # retirando a possibilidade de "nenhum" erro
                    erros.pop(0)
                    # lista dos erros encontrados no veículo do usuário
                    errosList = []
                    # variável que servirá para guardar o endereço dos erros que serão
                    # adicionados a "errosList" 
                    errosIndex = 0
                    # cada erro que for sorteado para "numerosErros" será adicionado a lista de erros
                    for i in (range(numerosErros)):
                        errosIndex = random.randint(0, numerosErros)
                        errosList.append(erros[errosIndex])
                        # Para evitar a repetição um mesmo erro
                        erros.pop(errosIndex)
                        numerosErros -= 1

                    print(f"Foram encontrados problemas com os seguintes componentes"
                          +f"de seu veículo:\n{errosList}")

                    print(f"Deseja obter o valor do orçamento?\n"
                                        "1 -> Sim\n2 -> Não\n")

                    escolha = entrada_valor_numerico()

                    escolha = erro_entrada(escolha, 2)

                    if escolha == 1:
                        valor_orcamento = 0.0
                        if errosList.__contains__("embreagem"):
                            valor_orcamento += 400.00
                        if errosList.__contains__("correia"):
                            valor_orcamento += 500.00
                        if errosList.__contains__("cambio"):
                            valor_orcamento += 3500.00
                        if errosList.__contains__("motor"):
                            valor_orcamento += 4000.00

                        print(f"\n\nO orçamento para reparo completo do seu\n"
                              +f"veículo ficou: {valor_orcamento: .2f}R$")

                    elif escolha == 2:
                        print(f"O usuário foi direcionado para a tela inicial")                

                 else:
                    print(f"O seu veiculo está perfeito\nSessão finalizada")

# Para obter todos os veículos armazenados
def get_veiculo():
    
    connection = conecta_db()
    cursor = connection.cursor()
    
    try:
        sql = f"SELECT * FROM tbl_veiculos"
        cursor.execute(sql)
            
        
        for linha in cursor:
            print(linha)
        
    except Exception as e:
        print(f"Erro ao consultar veículo: {e}")
         
    finally:
        print(f"Você deseja exportar as informações obtidas para um arquivo json?\n1 - Sim\t2 - Não")
        
        escolha = entrada_valor_numerico()
        escolha = erro_entrada(escolha, 2)
        
        if (escolha == 1):
            
            exportar_json(cursor)
        
        else: 
            pass
            cursor.close()


# Método POST do CRUD
def insert_veiculo():
    
    connection = conecta_db()
    
    cursor = connection.cursor()
    
    chassi = input("Informe o chassi: ")
    placa = input("Informe a placa: ")
    cor = input("Informe a cor: ")
    motor = input("Informe o motor: ")
    marca = input("Informe a marca: ")
    modelo = input("Informe o modelo: ")

    try:
        
        sql = f"INSERT INTO tbl_veiculos VALUES ('{chassi}', '{placa}', '{cor}', '{motor}', '{marca}', '{modelo}')"
        
        cursor.execute(sql)
        connection.commit()
        
    except Exception as e:
        print(f"Erro ao inserir veículo: {e}")
    finally:
        print("Veículo inserido com sucesso!")
        cursor.close()
        
# Método PUT do CRUD
def update_veiculo(chassi):
    
    connection = conecta_db()
    cursor = connection.cursor()
 
    chassi_novo = input("Informe o chassi: ")
    placa = input("Informe a placa: ")
    cor = input("Informe a cor: ")
    motor = input("Informe o motor: ")
    marca = input("Informe a marca: ")
    modelo = input("Informe o modelo: ")
    
    try:
        sql = f"UPDATE tbl_veiculos SET chassi = '{chassi_novo}', placa = '{placa}', cor = '{cor}',  motor = '{motor}', marca = '{marca}',  modelo = '{modelo}' WHERE chassi = '{chassi}'"
        cursor.execute(sql)
    
        connection.commit()
  
    except Exception as e:
        print(f"Erro ao atualizar veículo: {e}")
        
    finally:
        print(f"\nVeículo atualizado com sucesso\n")
        cursor.close()
       
  
# Método DELETE do CRUD
def delete_veiculo(chassi):
    
    connection = conecta_db()
    cursor = connection.cursor()
 
    try:
        
        sql = f"DELETE FROM tbl_veiculos WHERE chassi =  '{chassi}'"
        
        cursor.execute(sql)
        connection.commit()
        
    except Exception as e:
        print(f"Erro ao deletar veículo: {e}")
    finally:
        print("Veículo excluído com sucesso!")
        cursor.close()
    
    
# Após o usuário visualizar todos os veículos que ele possui, o sistema o dá a escolha de visualizar e posteriormente manipular algum veículo em específico
def escolha_funcionalidade():
    
    print(f"Você deseja vizualizar algum veículo em específico?\n1 - Sim\t2 - Não")
    
    escolha = entrada_valor_numerico()
    escolha = erro_entrada(escolha, 2)
        
    if (escolha == 1):
        get_veiculo_especifico()
        
    else: 
        menu()


def erro_entrada(entrada, qtdAlternativas):
    try:
        if qtdAlternativas == 2:
            while entrada != 1 and entrada != 2 :
                entrada = int(input(f"Entrada inválida\n"))
        elif qtdAlternativas == 3:
            while entrada != 1 and entrada != 2 and entrada != 3  :
                entrada = int(input(f"Entrada inválida\n"))
        else:
            pass
    except ValueError as texto:
        print(f"Insira apenas valores numéricos! - {texto}")
        erro_entrada(entrada, qtdAlternativas)
    except:
        print(f"Algum errou ocorreu durante a execução do código")
        erro_entrada(entrada, qtdAlternativas)
    finally:
        return entrada


def entrada_valor():
    entrada = input(f"\n")
    return entrada

def valida_email(entrada):
    tem = False
    if "@" in entrada:
        tem = True
    while tem == False:
        print(f"\nInsira o caractere '@' para a validação de seu email")
        entrada = entrada_valor()
        if "@" in entrada:
            tem = True
    return entrada


def valida_senha():
    
    print(f"\nAgora, crie uma senha forte, seguindo as seguintes regras:" +
          f"\nMínimo 8 caracteres\nconter números\nconter letras")
    
    senha = entrada_valor()
    
    valido = False
    while valido == False:
        temNumero = any(char.isdigit() for char in senha)
        temLetra = any(char.isalpha() for char in senha)
        tamanho = len(senha) >= 8
        if temLetra and temNumero and tamanho:
            valido = True
        else:
            print(f"Sua senha não cumpre os requisitos necessários!" +
                    f"\nLeia os requisitos com atenção e insira uma senha que os cumpra.")
            senha = entrada_valor()
        
    return senha

def entrada_valor_numerico():
    try:
        entrada = int(input(f"\n"))
    except ValueError as texto:
        print(f"Insira apenas valores numéricos! - {texto}")
        entrada = entrada_valor_numerico()
    except:
        print(f"Algum erro ocorreu durante a execução do código")
        entrada = entrada_valor_numerico()
    finally:
        return entrada


def menu():
    print(f"\nO usuário foi direcionado para a página inicial do projeto")

    print(f"Na tela inicial, o usuário pode escolher entre:\n"
                +f"1 - Adicionar novos veículos a plataforma\n"
                +f"2 - Acessar informações dos veículos que ele já possui\n")
    
    escolha = entrada_valor_numerico()
    escolha = erro_entrada(escolha, 2)
    return escolha

def funcionalidades(escolha):
    match escolha:
    # Funcionalidade 1 -> Adicionar veículo
        case 1:
            insert_veiculo()

        # Funcionalidades 2 e 3
        case 2:
           
            get_veiculo()

            escolha_funcionalidade()




# Principal

print(f"Vamos criar uma conta para você!\n Comece seu cadastro\n"
              +"Informando seu E-mail: ")

email_criar_conta = entrada_valor()
email_criar_conta = valida_email(email_criar_conta)

print(f"Ok, Agora crie uma senha forte para proteger sua conta\n"
              +"Sua senha deve conter no mínimo 8 caracteres: ")


senha_criar_conta = valida_senha()

print(f"\nO usuário foi direcionado para a tela de login\n\n"
      +f"1 -> caso tenha esquecido a senha\n" + 
      f"2 -> caso queira prosseguir com o login: ")

print(f"\nDigite sua escolha: ")
escolha = entrada_valor_numerico()
escolha = erro_entrada(escolha, 2)

if escolha == 1:

    print(f"\n Informe seu email para que possamos enviar "
                            +"o código de verificação: ")    

    email_recupecao = entrada_valor()    

    if email_criar_conta == email_recupecao:
        codigo = int(random.randrange(10000, 99999))
        # Simulando o código de verificação sendo enviado para o email do usuário
        print(f"\nO código de verificação é:\n{codigo}")
    
        print(f"\nInforme o código de verificação: ")
        codigo_usuario = entrada_valor_numerico()
    
            
        while codigo_usuario != codigo:
            print(f"\n\nO Código informado está errado\n")
            codigo = int(random.randrange(10000, 99999))
        
            print(f"O código de verificação é:\n{codigo}")
        
            codigo_usuario = entrada_valor_numerico()
            
        if codigo == codigo_usuario:
            print(f"\nDigite uma nova senha: ")
            senhaRedefinida = False
            while senhaRedefinida == False:
                senha_nova = valida_senha()
                if (senha_nova == senha_criar_conta):
                    print(f"\nSua nova senha não pode ser igual sua senha atual")
                else:
                    senha_criar_conta = senha_nova
                    senhaRedefinida = True
            
    else:
        print(f"Email inválido, você foi desconectado")
        exit()

print(f"\nInforme seu email: ")
email_login = entrada_valor()
print(f"\nInforme sua senha: ")
senha_login = entrada_valor()
contador_tentativas = 3

# Se alguma das credenciais estiver errada, o usuário terá seu acesso negado, porém
# poderá tentar novamente. Caso insira as credenciais erradas 3 vezes seguidas, ele precisará
# esperar 10 segundos para tentar novamente
while senha_login != senha_criar_conta or email_criar_conta != email_login:

    contador_tentativas -= 1
    print(f"Email ou senha estão incorretos, por favor, preencha os campos novamente\n"
            +f"Você ainda possui {contador_tentativas} tentativas")
    
    if contador_tentativas <= 0:
        print(f"Você atingiu a quantidade limite de tentativas, tente novamente após 10 segundos.")
        time.sleep(10.0)
        contador_tentativas = 3
    
    email_login = input(f"\nInforme seu email: ")
    senha_login = input(f"\nInforme sua senha: ")

if email_criar_conta == email_login and senha_criar_conta == senha_login:
    print(f"Acesso liberado")

sair = False

while sair == False:
    escolha = menu()

    funcionalidades(escolha)
    
    print("\nVocê deseja continuar na plataforma?\n" +
          "1 -> Sim\n2-> Não")
    
    escolha = entrada_valor_numerico()
    escolha = erro_entrada(escolha, 2)
    
    if escolha == 2:
        connection = conecta_db()
        connection.close()
        print("Até a próxima!")
        sair = True