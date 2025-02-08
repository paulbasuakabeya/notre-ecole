import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Bienvenue sur notre plateforme</h1>
      <p className="mb-4">Connectez-vous pour accéder à vos objets</p>
      <Link to="/login" className="px-4 py-2 bg-blue-500 text-white rounded">
        Connexion
      </Link>
      <Link to="/signup" className="px-4 py-2 bg-green-500 text-white rounded mt-2">
        Inscription
      </Link>
    </div>
  );
};

export default Home;
