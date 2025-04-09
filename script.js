// LOGIN
const formLogin = document.getElementById("form-login");
if (formLogin) {
  formLogin.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value;

    const user = JSON.parse(localStorage.getItem(email));

    if (user && user.senha === senha) {
      alert("Login realizado com sucesso!");
      localStorage.setItem("logado", email);
      window.location.href = "reservas.html";
    } else {
      alert("Usuário ou senha inválidos.");
    }
  });
}

// CADASTRO
const formCadastro = document.getElementById("form-cadastro");
if (formCadastro) {
  formCadastro.addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value;
    const confirmarSenha = document.getElementById("confirmar-senha").value;

    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem.");
      return;
    }

    const user = {
      nome: nome,
      email: email,
      senha: senha
    };

    localStorage.setItem(email, JSON.stringify(user));
    alert("Cadastro realizado com sucesso!");
    window.location.href = "index.html";
  });
}