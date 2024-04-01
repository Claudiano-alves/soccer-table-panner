
class Usuario{
    constructor(nomeUsuario, senha){
        this.nomeUsuario = nomeUsuario;
        this.senha = senha;
    }
}

const registerUser = [];

const registerForm = document.getElementById('registerForm');
const loginForm = document.getElementById('loginForm');
const msgError = document.getElementById('msgError');
const msgErrorPassW = document.getElementById('msgErrorPassW');
const list = document.querySelector('.list');

registerForm.addEventListener('submit',function(event){
    event.preventDefault();
    
    const usuario = document.getElementById('name').value;
    const senha = document.getElementById('password').value;
    const confirmSenha = document.getElementById('confirmPass').value;
    
    const userExists = registerUser.find(user => user.nomeUsuario === usuario);
    
    if(userExists){
        msgError.innerHTML = '<p>Usuário já cadastrado!</p>';
    } else{
        if(senha !== confirmSenha){
            msgErrorPassW.textContent = 'Senhas não coincidem!';
        } else{
            msgErrorPassW.textContent = '';
            const novoUsuario = new Usuario(usuario, senha);    
            registerUser.push(novoUsuario);
            registerForm.reset();
            list.innerHTML += `<p>${usuario}</p>\n`;
        }
    }
});

loginForm.addEventListener('submit', function(event){
    event.preventDefault();

    const userName = document.getElementById('userName').value;
    const password = document.getElementById('userPass').value;
    
    const userExists = registerUser.find(user => user.nomeUsuario === userName);
    
    if(userExists){
        if(userExists.senha === password){
            alert("Login realizado com sucesso");
            loginForm.reset();
        } else{
            msgErrorPass.textContent = 'Senha inválida!';
        }
    } else{
        msgErrorPass.textContent = 'Usuário inválido';
    }
});
