class Usuario{
    constructor(senha,nomeUsuario){
    this.senha = senha;
    this.nomeUsuario = nomeUsuario;
}
}

function main(){
    const Cadastro = [];
    
    for(let i = 0; i < 100; i++){
        Cadastro.push(new Usuario("-","-"));
    }
    let opcao = 99;
    
    while(opcao !== 0){
        opcao = parseInt(prompt(`Escolha a opção desejada:\n
        1 - Cadastrar usuário;
        2 - Remover usuário;
        3 - Acessar usuário;
        4 - Listar usuários;
        0 - Sair do Programa;
        `));

        switch(opcao){
            case 1:
                Cadastrar(Cadastro);
                break;
            case 2:
                Remover(Cadastro);
                break;
            case 3:
                Acessar(Cadastro);
                break;
            case 4:
                Listar(Cadastro);
                break;   
            case 0:
                break;
            default:
                alert("Opção inválida");
        }
    }
}

function Cadastrar(C){
    let UsuarioCadastrado = 0, i, usuarioNovo = '', senhaNova = '';
    while(usuarioNovo === ''){
        usuarioNovo = prompt('Qual usuario a ser cadastrado?');
    }
    for(let i = 0; i < 100; i++){

        if(C[i].nomeUsuario === usuarioNovo){
            alert("Usuário já cadastrado!");
            UsuarioCadastrado = 1;
            break;
        }
    }
    if(UsuarioCadastrado == 0){
        for(i = 0; i < 100; i++){
            if(C[i].nomeUsuario === "-"){
                C[i].nomeUsuario = usuarioNovo;
                while(1){
                    while(senhaNova === ''){
                        senhaNova = prompt("Insira a senha:");
                    }
                    C[i].senha = prompt("Repita a senha:");
                    if(senhaNova !== C[i].senha){
                        alert("Senhas não coincidem!");
                    } else break;
                }
                break;
            }
        }
    }
}
function Remover(C){
    let UsuarioCadastrado = 0, usuarioChecar;

    usuarioChecar =  prompt("Insira o usuário a ser removido:");

    for(let i = 0; i < 100; i++){
        if(C[i].nomeUsuario === usuarioChecar){
            C[i].nomeUsuario = "-";
            C[i].senha = "-";
            UsuarioCadastrado = 1;
            alert("Usuário encontrado e removido");
            break;
        }
    }  
    if(UsuarioCadastrado = 0) alert("Usuário não encontrado!");
}
function Acessar(C){
    let UsuarioCadastrado = 0, usuarioChecar, senhaChecar;

    usuarioChecar = prompt("Insira o usuário:");
    for(let i = 0; i < 100; i++){
        if(C[i].nomeUsuario === usuarioChecar){
            senhaChecar = prompt("Informe a senha:");
            if(senhaChecar === C[i].senha) alert("Acesso liberado");
            else alert("Senha incorreta. Acesso negado!");
            UsuarioCadastrado = 1;
            break;
        }
    }
    if(UsuarioCadastrado == 0) alert("Usuário não encontrado!");
}

function Listar(C) {
    let listaUsuarios = [];
    for (let i = 0; i < 100; i++) {
        if (C[i].nomeUsuario !== "-") {
            listaUsuarios.push(C[i].nomeUsuario);
        }
    }
    alert("Usuários cadastrados:\n" + listaUsuarios.join('\n'));
}

main();
