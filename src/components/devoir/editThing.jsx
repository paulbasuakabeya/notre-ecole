import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditThing = () => {
  const { id } = useParams();
  const [thing, setThing] = useState(null);
  const [partOne, setPartOne] = useState("");
  const [partTwo, setPartTwo] = useState("");
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchThing = async () => {
      try {
        const response = await axios.get(`https://backende-murex.vercel.app/api/stuff/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = response.data;
        setThing(data);
        const titleParts = data.title.split(' / ');
        setPartOne(titleParts[0] || "");
        setPartTwo(titleParts[1] || "");
      } catch (error) {
        console.error("Erreur de récupération de l'objet", error);
      }
    };
    fetchThing();
  }, [id, token]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", `${partOne.toUpperCase()} / ${partTwo}`);
    formData.append("description", thing.description);
    formData.append("date", thing.date);
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
      navigate("/navbartwo/dashboard");
    } catch (error) {
      console.error("Erreur de modification", error);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: "numeric", month: "long", year: "numeric" };
    return date.toLocaleDateString("fr-FR", options);
  };

  if (!thing) return <p>Chargement...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Modifier l'objet</h1>
      <form onSubmit={handleUpdate} className="max-w-lg mx-auto p-4 border rounded shadow">
        <div className="flex space-x-2">
          <input
            type="text"
            value={partOne}
            onChange={(e) => setPartOne(e.target.value)}
            required
            className="w-1/2 p-2 border rounded my-2"
            placeholder="MATHEMATIQUE"
          />
          <input
            type="text"
            value={partTwo}
            onChange={(e) => setPartTwo(e.target.value)}
            required
            className="w-1/2 p-2 border rounded my-2"
            placeholder="5è Biologie"
          />
        </div>
        <textarea
          value={thing.description}
          onChange={(e) => setThing({ ...thing, description: e.target.value })}
          required
          className="w-full p-2 border rounded my-2"
        />
        <input
          type="date"
          value={thing.date}
          onChange={(e) => setThing({ ...thing, date: e.target.value })}
          required
          className="w-full p-2 border rounded my-2"
        />
        <input
          type="text"
          value={thing.date ? `À rendre avant le ${formatDate(thing.date)}` : ""}
          className="w-full p-2 border rounded my-2"
          readOnly
        />
        <input
          type="file"
          onChange={(e) => setThing({ ...thing, image: e.target.files[0] })}
          className="w-full p-2 border rounded my-2"
        />
        <button type="submit" className="w-full bg-green-500 text-white p-2 rounded">
          Modifier
        </button>
      </form>
    </div>
  );
};

export default EditThing;


