import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isDirty, setIsDirty] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (isDirty) {
        const message = "You have unsaved changes, do you really want to leave?";
        e.returnValue = message; // Standard for most browsers
        return message; // For some older browsers
      }
    };
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [isDirty]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://revisionbackend.vercel.app/api/auth/signup", { email, password });
      navigate("/login");
    } catch (error) {
      console.error("Erreur lors de l'inscription", error);
    }
  };

  const handleChange = (setter) => (e) => {
    setter(e.target.value);
    setIsDirty(true);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Créer un compte</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-80">
        <input
          type="email"
          placeholder="Email"
          className="border p-2 w-full mb-2"
          value={email}
          onChange={handleChange(setEmail)}
          required
        />
        <input
          type="password"
          placeholder="Mot de passe"
          className="border p-2 w-full mb-4"
          value={password}
          onChange={handleChange(setPassword)}
          required
        />
        <button type="submit" className="btn bg-blue-500 text-white p-2 rounded">S'inscrire</button>
      </form>
    </div>
  );
};

export default Signup;
