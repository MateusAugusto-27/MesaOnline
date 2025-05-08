import { useState } from "react";

export default function App() {
  const [isFuncionario, setIsFuncionario] = useState(false);
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Usuário:", usuario);
    console.log("Senha:", senha);
  };

  return (
    <div className="h-screen flex items-center justify-center bg-greenFigma font-sans">
      <div className="bg-greenFigma w-[380px] p-6 rounded-lg shadow-lg">
        <h1 className="text-white text-4xl text-center mb-6 font-light tracking-widest">ENTRAR</h1>

        {/* Ícone de bandeja */}
        <div className="flex justify-center mb-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3595/3595455.png"
            alt="Bandeja"
            className="h-16"
          />
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="text-white text-sm">USUÁRIO / EMAIL</label>
            <input
              type="text"
              placeholder="Digite aqui..."
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              className="w-full mt-1 p-2 rounded-md outline-none text-sm"
              aria-label="Usuário"
            />
          </div>

          <div className="mb-4">
            <label className="text-white text-sm">
              {isFuncionario ? "SENHA / CÓDIGO" : "SENHA"}
            </label>
            <input
              type="password"
              placeholder="Digite aqui..."
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="w-full mt-1 p-2 rounded-md outline-none text-sm"
              aria-label="Senha"
            />
          </div>

          <div className="flex justify-between gap-4 mt-6">
            <button
              type="submit"
              className="bg-dark text-white px-4 py-2 rounded-md w-full hover:opacity-80"
            >
              ENTRAR
            </button>
            <button
              type="button"
              className="bg-dark text-white px-4 py-2 rounded-md w-full hover:opacity-80"
            >
              REGISTRAR
            </button>
          </div>
        </form>

        <div className="mt-4 text-center">
          <button
            onClick={() => setIsFuncionario(!isFuncionario)}
            className="text-xs text-white underline hover:opacity-90"
          >
            {isFuncionario ? "Sou Cliente" : "Sou Funcionário (com código)"}
          </button>
        </div>
      </div>
    </div>
  );
}
