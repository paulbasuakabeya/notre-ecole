import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateCommunication = () => {
  const [titre, setTire] = useState('');
  const [message, setMessage] = useState('');
  const [date, setDate] = useState('');
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleCreate = async (e) => {
    e.preventDefault();
    const newCommunication = { titre, message, date };

    try {
      await axios.post(`https://backende-ten.vercel.app//api/communications`, newCommunication, {
        headers: { Authorization: `Bearer ${token}` },
      });
      navigate("/communications");
    } catch (error) {
      console.error("Erreur de création de la communication", error);
    }
  };

  return (
    <div className="p-6 bg-customBg min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold mb-4">Créer une nouvelle communication</h1>
      <form onSubmit={handleCreate} className="max-w-lg mx-auto p-4 border rounded shadow">
        <input type="text" className="w-full p-2 border rounded my-2" placeholder="Titre  ex: Réunion Parents-Profs" value={titre} onChange={(e) => setTire(e.target.value)} required />
        <textarea className="w-full p-2 border rounded my-2" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} required />
        <input type="date" className="w-full p-2 border rounded my-2" placeholder="Date de Publication" value={date} onChange={(e) => setDate(e.target.value)} required />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Créer</button>
      </form>
    </div>
  );
};

export default CreateCommunication;
