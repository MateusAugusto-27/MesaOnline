// src/pages/Login.tsx
import React, { useState } from "react";
import { FaUser, FaLock, FaEnvelope, FaKey } from "react-icons/fa";

export default function Login() {
  const [role, setRole] = useState<"cliente" | "funcionario">("cliente");
  const [form, setForm] = useState({ nome: "", email: "", senha: "", codigo: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(role, form);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#3d4d3a] text-white px-4">
      <div className="bg-[#2f3b2e] p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Bem-vindo(a)!</h1>

        <div className="flex justify-center mb-6">
          <button
            onClick={() => setRole("cliente")}
            className={`px-6 py-2 rounded-l-full transition ${
              role === "cliente" ? "bg-white text-[#2f3b2e]" : "bg-[#4c5c49] text-white"
            }`}
          >
            Cliente
          </button>
          <button
            onClick={() => setRole("funcionario")}
            className={`px-6 py-2 rounded-r-full transition ${
              role === "funcionario" ? "bg-white text-[#2f3b2e]" : "bg-[#4c5c49] text-white"
            }`}
          >
            Funcionário
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center bg-white rounded px-3 py-2 text-[#2f3b2e]">
            <FaUser className="mr-2" />
            <input
              type="text"
              name="nome"
              placeholder="Nome"
              className="bg-transparent outline-none w-full"
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex items-center bg-white rounded px-3 py-2 text-[#2f3b2e]">
            <FaEnvelope className="mr-2" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="bg-transparent outline-none w-full"
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex items-center bg-white rounded px-3 py-2 text-[#2f3b2e]">
            <FaLock className="mr-2" />
            <input
              type="password"
              name="senha"
              placeholder="Senha"
              className="bg-transparent outline-none w-full"
              onChange={handleChange}
              required
            />
          </div>

          {role === "funcionario" && (
            <div className="flex items-center bg-white rounded px-3 py-2 text-[#2f3b2e]">
              <FaKey className="mr-2" />
              <input
                type="text"
                name="codigo"
                placeholder="Código do Funcionário"
                className="bg-transparent outline-none w-full"
                onChange={handleChange}
                required
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-white text-[#2f3b2e] py-2 rounded hover:bg-[#d1d7ce] transition font-semibold"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
