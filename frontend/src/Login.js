import React from "react";
import "./Login.css";
import pratoIcone from "./serving-dish.png"; // certifique-se que essa imagem existe!

const Login = () => {
  return (
    <div className="login-container">
      <button className="voltar">VOLTAR</button>
      <h1>ENTRAR</h1>
      <img src={pratoIcone} alt="Prato" className="icone" />
      
      <div className="input-group">
        <label>USUÁRIO / EMAIL</label>
        <input type="text" placeholder="Digite aqui..." />
      </div>

      <div className="input-group">
        <label>SENHA / CÓDIGO</label>
        <input type="password" placeholder="Digite aqui..." />
      </div>

      <div className="botoes">
        <button className="botao">ENTRAR</button>
        <button className="botao">REGISTRAR</button>
      </div>
    </div>
  );
};

export default Login;
