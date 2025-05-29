import React, { useState } from "react";
import "./Login.css";
import pratoIcone from "./serving-dish.png";

const Login = ({ onLoginSucesso }) => {
  const [email, setEmail] = useState("");
  const [senhaOuCodigo, setSenhaOuCodigo] = useState("");
  const [erro, setErro] = useState("");

  const handleLogin = () => {
    if (senhaOuCodigo === "2207") {
      onLoginSucesso(); // redireciona
    } else {
      setErro("Código incorreto. Tente novamente.");
    }
  };

  return (
    <div className="login-container">
      <button className="voltar">VOLTAR</button>
      <h1>ENTRAR</h1>
      <img src={pratoIcone} alt="Prato" className="icone" />

      <div className="input-group">
        <label>USUÁRIO / EMAIL</label>
        <input
          type="text"
          placeholder="Digite aqui..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>SENHA / CÓDIGO</label>
        <input
          type="password"
          placeholder="Digite aqui..."
          value={senhaOuCodigo}
          onChange={(e) => setSenhaOuCodigo(e.target.value)}
        />
      </div>

      {erro && <p style={{ color: "red", marginTop: "10px" }}>{erro}</p>}

      <div className="botoes">
        <button className="botao" onClick={handleLogin}>ENTRAR</button>
        <button className="botao">REGISTRAR</button>
      </div>
    </div>
  );
};

export default Login;
