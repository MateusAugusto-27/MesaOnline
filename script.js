document.getElementById("form-login").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const email = document.getElementById("email").value;
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