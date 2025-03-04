import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddThing = () => {
  const navigate = useNavigate();
  const [partOne, setPartOne] = useState("");
  const [partTwo, setPartTwo] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState(null);

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const options = { day: "numeric", month: "long", year: "numeric" };
    return new Date(dateString).toLocaleDateString("fr-FR", options);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("thing", JSON.stringify({ title: `${partOne.toUpperCase()} / ${partTwo}`, description, date }));
    formData.append("image", image);

    try {
      await axios.post("https://backende-ten.vercel.app//api/stuff", formData, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      navigate("/dashboard");
    } catch (error) {
      console.error("Erreur lors de l'ajout", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 border rounded shadow bg-white">
      <h2 className="text-xl font-bold text-center">Ajouter un Devoir</h2>
      <div className="flex space-x-2">
        <input 
          type="text" 
          placeholder="MATHEMATIQUE" 
          value={partOne} 
          onChange={(e) => setPartOne(e.target.value)} 
          className="w-1/2 p-2 border rounded my-2" 
          required 
        />
        <input 
          type="text" 
          placeholder="5è Biologie" 
          value={partTwo} 
          onChange={(e) => setPartTwo(e.target.value)} 
          className="w-1/2 p-2 border rounded my-2" 
          required 
        />
      </div>
      <textarea 
        placeholder="Description" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
        className="w-full p-2 border rounded my-2" 
        required 
      />
      <input 
        type="date" 
        value={date} 
        onChange={(e) => setDate(e.target.value)} 
        className="w-full p-2 border rounded my-2" 
        required 
      />
      <input 
        type="text" 
        value={date ? `À rendre avant le ${formatDate(date)}` : ""} 
        className="w-full p-2 border rounded my-2" 
        readOnly 
      />
      <input 
        type="file" 
        onChange={(e) => setImage(e.target.files[0])} 
        className="w-full p-2 border rounded my-2" 
        required 
      />
      <button 
        type="submit" 
        className="w-full bg-blue-500 text-white p-2 rounded"
      >
        Ajouter
      </button>
    </form>
  );
};

export default AddThing;
