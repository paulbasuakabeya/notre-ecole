
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditThing = () => {
  const { id } = useParams();
  const [thing, setThing] = useState(null);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchThing = async () => {
      try {
        const response = await axios.get(`https://backende-murex.vercel.app/api/stuff/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setThing(response.data);
      } catch (error) {
        console.error("Erreur de récupération de l'objet", error);
      }
    };
    fetchThing();
  }, [id, token]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", thing.title);
    formData.append("description", thing.description);
    formData.append("price", thing.price);
    if (thing.image) {
      formData.append("image", thing.image);
    }

    try {
      await axios.put(`https://backende-murex.vercel.app/api/stuff/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      navigate("/dashboard");
    } catch (error) {
      console.error("Erreur de modification", error);
    }
  };

  if (!thing) return <p>Chargement...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Modifier l'objet</h1>
      <form onSubmit={handleUpdate} className="space-y-4">
        <input type="text" className="input" value={thing.title} onChange={(e) => setThing({ ...thing, title: e.target.value })} required />
        <textarea className="input" value={thing.description} onChange={(e) => setThing({ ...thing, description: e.target.value })} required />
        <input type="text" className="input" value={thing.price} onChange={(e) => setThing({ ...thing, price: e.target.value })} required />
        <input type="file" className="input" onChange={(e) => setThing({ ...thing, image: e.target.files[0] })} />
        <button type="submit" className="btn bg-green-500 text-white p-2 rounded">Modifier</button>
      </form>
    </div>
  );
};

export default EditThing;
