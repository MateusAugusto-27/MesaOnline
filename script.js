const formCadastro = document.getElementById('form-cadastro');

formCadastro.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmar-senha').value;

    if (senha !== confirmarSenha) {
        alert('Senhas não conferem!');
        return;
    }

    console.log('Cadastro realizado com sucesso!');
    console.log('Nome:', nome);
    console.log('Email:', email);
    console.log('Senha:', senha);
});
