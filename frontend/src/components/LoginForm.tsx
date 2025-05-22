import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoginForm() {
  const [activeTab, setActiveTab] = useState("cliente");

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Bem-vindo</h2>

        {/* Alternador */}
        <div className="flex justify-center gap-4 mb-6">
          {["cliente", "funcionario"].map((tipo) => (
            <button
              key={tipo}
              onClick={() => setActiveTab(tipo)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                activeTab === tipo
                  ? "bg-gray-800 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              Login {tipo === "cliente" ? "Cliente" : "Funcionário"}
            </button>
          ))}
        </div>

        {/* Formulário animado */}
        <AnimatePresence mode="wait">
          <motion.form
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <div>
              <label className="block text-sm text-gray-600">Email</label>
              <input
                type="email"
                placeholder="seu@email.com"
                className="w-full mt-1 px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-800"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600">Senha</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full mt-1 px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-800"
              />
            </div>

            {activeTab === "funcionario" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <label className="block text-sm text-gray-600">Código</label>
                <input
                  type="text"
                  placeholder="Código do funcionário"
                  className="w-full mt-1 px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-800"
                />
              </motion.div>
            )}

            <div className="flex justify-between text-sm text-gray-600">
              <a href="#" className="hover:underline">Esqueceu a senha?</a>
              <a href="#" className="hover:underline">Cadastrar</a>
            </div>

            <button
              type="submit"
              className="w-full bg-gray-800 text-white py-2 rounded-lg text-sm font-semibold hover:bg-gray-900 transition"
            >
              Entrar
            </button>
          </motion.form>
        </AnimatePresence>
      </div>
    </div>
  );
}

