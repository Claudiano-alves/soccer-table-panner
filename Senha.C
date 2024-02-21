#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct{
	char nome[20];
	char senha[10];
} Usuario;

void Cadastrar(Usuario T[])
{
 	int UsuarioCadastrado = 0,cont;
 	char usuarionovo[20];
 	char senhanova[10];
 	
 	printf("Qual o usuario a ser cadastrado?\n");
	scanf(" %s",&usuarionovo);
	
	for(cont = 0; cont < 100; cont++)
	{
		if(strcmp(T[cont].nome,usuarionovo) == 0)
		{
			printf("Usuario ja cadastrado\n");
			UsuarioCadastrado = 1;
			break;
		}
	}
	if(UsuarioCadastrado == 0) 
	{
		for(cont = 0; cont < 100; cont++)
		{
			if(strcmp(T[cont].nome,"-") == 0)
			{
				strcpy(T[cont].nome,usuarionovo);
				while(1)
				{
					printf("Insira a senha\n");
					scanf("%s",&senhanova);
					printf("Repita a senha\n");
					scanf("%s",&T[cont].senha);
					if(strcmp(T[cont].senha,senhanova) == 0) break;
					else printf("Senhas não coincidem\n");
				}
				break;
			}
		}	
	}
}

void Remover(Usuario T[])
{
	int UsuarioCadastrado = 0, cont;
	char usuariocchecar[20];

 	printf("Qual o usuario a ser removido?\n");
	scanf(" %s",&usuariocchecar);
	
	for(cont = 0; cont < 100; cont++)
	{
		if(strcmp(T[cont].nome,usuariocchecar) == 0)
		{
			printf("Usuario Encontrado e Removido\n");
			strcpy(T[cont].nome,"-");
			strcpy(T[cont].senha,"-");
			UsuarioCadastrado = 1;
			break;
		}
	}
	if(UsuarioCadastrado == 0) printf("Usuario não encontrado\n");
}

void Acessar(Usuario T[])
{
	int UsuarioCadastrado = 0, cont;
	char usuariocchecar[20];
	char SenhaChecar[10];
	
	printf("Inserir o usuario\n");
	scanf(" %s",&usuariocchecar);
	
	for(cont = 0; cont < 100; cont++)
	{
		if(strcmp(T[cont].nome,usuariocchecar) == 0)
		{
			printf("Informar a senha\n");
			scanf("%s", &SenhaChecar);
			if (strcmp(SenhaChecar,T[cont].senha) == 0) printf("Acesso liberado\n");
			else printf("Senha Incorreta. Acesso Negado\n");
			UsuarioCadastrado = 1;
			break;
		}
	}
	if(UsuarioCadastrado == 0) printf("Usuario não encontrado\n");	
}

void Listar(Usuario T[]){
	
	for(int i = 0; i < 100; i++){
		if(strcmp(T[i].nome, "-") == 0){
		} else printf("%s\n", T[i].nome);
	}
}

int main(int argc, char *argv[]) {
	
	Usuario Usuarios[100];
	int opcao = 99, cont;
	
	for(cont = 0; cont < 100; cont++)
	{
		strcpy(Usuarios[cont].nome,"-");
	}
		
	while(opcao != 0)
	{
		printf("Escolha a opcao desejada:\n");
		printf("\t1- Cadastrar usuario\n");
		printf("\t2- Remover Usuario\n");
		printf("\t3- Acessar o sistema\n");
		printf("\t4- Listar Usuarios\n");
		printf("\t0- Sair do Programa\n");
		scanf("%d",&opcao);
		
		switch(opcao)
		{
			case 1:
				Cadastrar(Usuarios);
				break;
			case 2:
				Remover(Usuarios);
				break;
			case 3:
				Acessar(Usuarios);
				break;
			case 4:
				Listar(Usuarios);
				break;
			case 0:
				break;
			default:
				printf("Opcao invalida\n");
		}
	}
	
	return 0;
}
