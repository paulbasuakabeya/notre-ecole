import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Trash } from "lucide-react";
import { Edit } from "lucide-react";
import { Plus } from "lucide-react";

const CommunicationDetail = () => {
  const [communications, setCommunications] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchCommunications = async () => {
      try {
        const response = await axios.get(`https://backende-murex.vercel.app/api/communications`);
        setCommunications(response.data);
      } catch (error) {
        console.error('Erreur de récupération des communications', error);
      } finally {
        setLoading(false);
      }
    };
    fetchCommunications();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://backende-murex.vercel.app/api/communications/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setCommunications(communications.filter(comm => comm._id !== id));
    } catch (error) {
      console.error('Erreur de suppression de la communication', error);
    }
  };

  if (loading) {
    return <p>Chargement...</p>;
  }

  return (
    <div className="p-6 bg-customBg min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-6 text-center text-white">Liste des communications</h1>
      <ul className="w-full max-w-2xl">
        {communications.map((communication) => (
          <li key={communication._id} className="border p-4 mb-4 rounded shadow-lg bg-white text-center">
            <h2 className="text-xl font-semibold mb-2">{communication.titre}</h2>
            <p className="mb-2">{communication.message}</p>
            <p className="text-gray-500 text-sm mb-4">Publié le {new Date(communication.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
            <div className="flex justify-between">
              <Link  className="bg-yellow-500 text-white p-2 rounded flex items-center justify-center">
                <Edit size={18} />
              </Link>
              <button className="bg-red-500 text-white p-2 rounded flex items-center justify-center">
                <Trash size={18} />
              </button>
            </div>
          </li>
        ))}
      </ul>
     
    </div>
  );
};

export default CommunicationDetail;
