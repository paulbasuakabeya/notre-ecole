import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://backende-murex.vercel.app/api/auth/signup", { email, password });
      navigate("/login"); // Redirection vers la page de connexion http://localhost:3000/api/auth/signup
    } catch (error) {
      console.error("Erreur lors de l'inscription", error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Créer un compte</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="email" placeholder="Email" className="input" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Mot de passe" className="input" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit" className="btn bg-blue-500 text-white p-2 rounded">S'inscrire</button>
      </form>
    </div>
  );
};

export default Signup;





// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const Signup = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:3000/api/auth/signup", { email, password });
//       alert("Inscription réussie, connectez-vous !");
//       navigate("/login");
//     } catch (error) {
//       alert("Erreur lors de l'inscription !");
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
//       <h2 className="text-2xl font-bold mb-4">Inscription</h2>
//       <form onSubmit={handleSignup} className="bg-white p-6 rounded shadow-md w-80">
//         <input type="email" placeholder="Email" className="border p-2 w-full mb-2" onChange={(e) => setEmail(e.target.value)} />
//         <input type="password" placeholder="Mot de passe" className="border p-2 w-full mb-4" onChange={(e) => setPassword(e.target.value)} />
//         <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded w-full">S'inscrire</button>
//       </form>
//     </div>
//   );
// };

// export default Signup;
