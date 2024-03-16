class Usuario{
    constructor(senha,nomeUsuario){
        this.senha = senha;
        this.nomeUsuario = nomeUsuario;
    }
}

function Cadastrar(C){
    
    let cadastradoNovo = 0, i, usuarioNovo = '', senhaNova = '';
    

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
                        senhaNova = alert("Insira a senha:");
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

    usuarioChecar = prompt("Insira o usuário a ser removido:");

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
