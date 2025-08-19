


import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditCommunication = () => {
  const { id } = useParams();
  const [communication, setCommunication] = useState(null);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchCommunication = async () => {
      try {
        const response = await axios.get(`https://revisionbackend-j857.onrender.com/api/communications/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setCommunication(response.data);
      } catch (error) {
        console.error("Erreur de récupération de la communication", error);
      }
    };
    fetchCommunication();
  }, [id, token]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const updatedCommunication = {
      titre: communication.titre,
      message: communication.message,
      date: communication.date,
    };

    try {
      await axios.put(`https://revisionbackend-j857.onrender.com/api/communications/${id}`, updatedCommunication, {
        headers: { Authorization: `Bearer ${token}` },
      });
      navigate("/navbartwo/communications");
    } catch (error) {
      console.error("Erreur de modification", error);
    }
  };

  if (!communication) return <p>Chargement...</p>;

  return (
    <div className="p-6 bg-customBg min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold mb-4">Modifier la communication</h1>
      <form onSubmit={handleUpdate} className="max-w-lg mx-auto p-4 border rounded shadow">
        <input type="text" className="w-full p-2 border rounded my-2" value={communication.titre} onChange={(e) => setCommunication({ ...communication, titre: e.target.value })} required />
        <textarea className="w-full p-2 border rounded my-2" value={communication.message} onChange={(e) => setCommunication({ ...communication, message: e.target.value })} required />
        <input type="date" className="w-full p-2 border rounded my-2" value={communication.date} onChange={(e) => setCommunication({ ...communication, date: e.target.value })} required />
        <button type="submit" className="btn bg-green-500 text-white p-2 rounded">Modifier</button>
      </form>
    </div>
  );
};

export default EditCommunication;
