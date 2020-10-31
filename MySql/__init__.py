import pymysql

# criando conexao com o servidor do MySql
conexao = pymysql.connect(
    host = 'localhost',
    user = 'root',
    passwd = ''
)

cursor = conexao.cursor()



## CHECA OS BANCO CRIADOS ##
    #cursor.execute("SHOW DATABASES")
    #for x in cursor:
    #    print(x)


## CRIA NOVO BANCO ##
    #cursor.execute("CREATE DATABASE MyBusca")