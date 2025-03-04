
import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from '../../assets/images/Home.png';

const Home = () => {
  return (
   <div
      className="relative w-full h-1/2 md:h-screen min-h-[50vh] flex flex-col items-center justify-center 
                 bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        aspectRatio: "16/9",
      }}
    >
      {/* Conteneur des boutons */}
      <div className="relative flex flex-col md:flex-row md:items-end md:justify-start md:absolute md:bottom-4 md:left-4 
                      space-y-2 md:space-y-0 md:space-x-2 md:pl-16">
        <Link to="/login" className="px-4 py-2 bg-blue-500 text-white rounded shadow-md hover:bg-blue-600 transition">
          Connexion
        </Link>
        <Link
          to="/devoir-communique"
          className="px-4 py-2 bg-green-500 text-white rounded shadow-md hover:bg-green-600 transition"
        >
          Activités
        </Link>
      </div>
    </div>
  );
};

export default Home;
