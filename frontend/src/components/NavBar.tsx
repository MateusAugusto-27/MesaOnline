import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="bg-green-700 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl">BackMesa</h1>
        <div>
          <Link to="/" className="text-white px-4 py-2 hover:bg-green-600 rounded">
            Login
          </Link>
          <Link to="/home" className="text-white px-4 py-2 hover:bg-green-600 rounded ml-4">
            Home
          </Link>
        </div>
      </div>
    </nav>
  );
}
