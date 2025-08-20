import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post("http://localhost:3000/api/auth/login", { email, password });
  //     localStorage.setItem("token", response.data.token);
  //     navigate("/dashboard"); // Redirection vers le dashboard
  //   } catch (error) {
  //     console.error("Erreur lors de la connexion", error);
  //   }
  // };




  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://revisionbackend.vercel.app/api/auth/login", { email, password });
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("role", response.data.role);
      navigate("/dashboard");
    } catch (error) {
      console.error("Erreur lors de la connexion", error);
    }
  };
  

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Connexion</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-80">
        <input type="email" placeholder="Email" className="border p-2 w-full mb-2" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Mot de passe" className="border p-2 w-full mb-4" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded w-full">Se connecter</button>
      </form>
    </div>
  
  );
};

export default Login;
