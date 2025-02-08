import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {


  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <Link to="/" className="text-lg font-bold">Accueil</Link>
      
      <h1 className="text-xl font-bold">Mon App</h1>
      <button onClick={handleLogout} className="btn bg-red-500 p-2 rounded">Déconnexion</button>
      <div>
        <Link to="/dashboard" className="px-4">Dashboard</Link>
        <Link to="/login" className="px-4">Connexion</Link>
        <Link to="/signup" className="px-4">Inscription</Link>
      </div>
    </nav>
  );
};

export default Navbar;



// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav className="bg-gray-800 text-white p-4 flex justify-between">
//       <Link to="/" className="text-lg font-bold">Accueil</Link>
//       <div>
//         <Link to="/login" className="px-4">Connexion</Link>
//         <Link to="/signup" className="px-4">Inscription</Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
