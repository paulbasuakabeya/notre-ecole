import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import backgroundImage from '../../assets/images/Home.png';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
            const response = await axios.post("https://revisionbackend.vercel.app/api/auth/login", { email, password });
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("role", response.data.role);
      navigate("/navbartwo");
    } catch (error) {
      console.error("Erreur lors de la connexion", error);
    }
  };
  

  return (
     <div
  className="relative w-full h-1/2 md:h-screen min-h-[50vh] flex flex-col items-center justify-center bg-cover bg-center 
             overflow-hidden max-w-full"
  style={{
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    aspectRatio: "16/9",
  }}
>
  {/* Overlay pour améliorer la lisibilité */}
  <div className="absolute inset-0 bg-black/25"></div>

  {/* Formulaire */}
  <form 
    onSubmit={handleSubmit}  className="relative z-10 bg-blue-300 p-6 rounded-xl shadow-md w-full max-w-xs md:max-w-md">
    <input type="email" placeholder="Email" className="border border-gray-300 p-2 w-full mb-2 rounded-md" onChange={(e) => setEmail(e.target.value)} />
    <input type="password" placeholder="Mot de passe" className="border border-gray-300 p-2 w-full mb-4 rounded-md" onChange={(e) => setPassword(e.target.value)} />
    <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md w-full hover:bg-blue-600 transition" >Se connecter</button>
  </form>
</div>
    // <div
    //       className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
    //       style={{ backgroundImage: `url(${backgroundImage})` }}
    //     >
    //   {/* <h2 className=" bg-blue-300 text-2xl font-bold mb-4">Connexion</h2> */}
    //   <form onSubmit={handleSubmit} className="bg-blue-300 p-6 rounded shadow-md w-80">
    //     <input type="email" placeholder="Email" className="border p-2 w-full mb-2" onChange={(e) => setEmail(e.target.value)} />
    //     <input type="password" placeholder="Mot de passe" className="border p-2 w-full mb-4" onChange={(e) => setPassword(e.target.value)} />
    //     <button type="submit" className="px-4 py-2 bg-blue-300 text-white rounded w-full">Se connecter</button>
    //   </form>
    // </div>
    
  );
};

export default Login;
