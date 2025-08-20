import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import backgroundImage from '../../assets/images/Home.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [passwordStrength, setPasswordStrength] = useState('');
  const navigate = useNavigate();

  const handlePasswordChange = (e) => {
    const password = e.target.value;
    setPassword(password);

    // Vérifier la force du mot de passe
    if (password.length < 6) {
      setPasswordStrength('Weak');
    } else if (password.length < 10) {
      setPasswordStrength('Moderate');
    } else {
      setPasswordStrength('Strong');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://revisionbackend.vercel.app/api/auth/login', { email, password })
      .then(response => {
        localStorage.setItem('token', response.data.token);
        const role = response.data.role;
        if (role === 'admin') {
          navigate('/navbartwo');
        } else if (role === 'agent') {
          navigate('/agent-dashboard');
        } else if (role === 'user') {
          navigate('/user-dashboard');
        }
      })
      .catch(error => {
        setErrorMessage('Erreur lors de la connexion. Veuillez vous inscrire si vous n\'avez pas de compte.');
        console.error('Erreur lors de la connexion!', error);
      });
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
        onSubmit={handleSubmit} 
        className="relative z-10 bg-blue-300 p-6 rounded-xl shadow-md w-full max-w-xs md:max-w-md"
      >
        <input 
          type="email" 
          placeholder="Email" 
          className="border border-gray-300 p-2 w-full mb-2 rounded-md" 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <div className="mb-4 relative">
          <input 
            type={showPassword ? "text" : "password"} 
            placeholder="Mot de passe" 
            className="border border-gray-300 p-2 w-full rounded-md" 
            onChange={handlePasswordChange} 
          />
          <span 
            className="absolute right-2 top-2 cursor-pointer" 
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        {password && (
          <p className={`text-sm ${passwordStrength === 'Weak' ? 'text-red-500' : passwordStrength === 'Moderate' ? 'text-yellow-500' : 'text-green-500'}`}>
            Password Strength: {passwordStrength}
          </p>
        )}
        <button 
          type="submit" 
          className="px-4 py-2 bg-blue-500 text-white rounded-md w-full hover:bg-blue-600 transition"
        >
          Se connecter
        </button>   
         {/* j'ai mis le bouton s'inscrire en commentaire */}

        {/* <div className="flex justify-center">
          <button 
            onClick={() => navigate('/signup')} 
            className="relative z-10 mt-4 text-blue-500 hover:underline text-center">
            S'inscrire
          </button>
        </div> */}


        
      
      </form>

      {errorMessage && (
        <p className="relative z-10 mt-4 text-red-500">{errorMessage}</p>
      )}

      
    </div>
  );
};

export default Login;

