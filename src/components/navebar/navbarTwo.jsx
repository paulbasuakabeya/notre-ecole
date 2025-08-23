import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Home } from "lucide-react";

const Navbartwo = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-customBg text-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-lg font-bold hidden md:block">Accueil</Link>
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/navbartwo/send-email"className="px-4 py-2 rounded hover:bg-gray-200 transition">📧 Mail</Link>
          <Link to="/navbartwo/dashboard" className="px-4 py-2 rounded hover:bg-gray-200 transition">📚 Devoir</Link>
          <Link to="/navbartwo/" className="px-4 py-2 rounded hover:bg-gray-200 transition">Role</Link>
          <Link to="/navbartwo/signup" className="px-4 py-2 rounded hover:bg-gray-200 transition">Inscription</Link>
          <Link to="/navbartwo/communications" className="px-4 py-2 rounded hover:bg-gray-200 transition">📢 Communications</Link>
          <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition">Déconnexion</button>
        </div>
        <div className="md:hidden flex items-center justify-between w-full">
          <Link to="/" className="text-lg font-bold">
            <Home size={24} />
          </Link>
          <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition">
            Déconnexion
          </button>
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col items-center space-y-2">
          <Link to="/navbartwo/send-email"className="px-4 py-2 rounded hover:bg-gray-200 transition">📧 Mail</Link>
          <Link to="/navbartwo/dashboard" className="block px-4 py-2 rounded hover:bg-gray-200 transition">📚 Devoir</Link>
          <Link to="/navbartwo/communications" className="block px-4 py-2 rounded hover:bg-gray-200 transition">📢 Communications</Link>
          <Link to="/navbartwo/" className="block px-4 py-2 rounded hover:bg-gray-200 transition">Role</Link>
          <Link to="/navbartwo/signup" className="block px-4 py-2 rounded hover:bg-gray-200 transition">Inscription</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbartwo;
