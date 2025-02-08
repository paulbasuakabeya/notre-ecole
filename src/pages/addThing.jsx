
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddThing = () => {
  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");
  // const [price, setPrice] = useState("");
  // const [image, setImage] = useState(null);
  // const navigate = useNavigate();
  // const token = localStorage.getItem("token");

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append("title", title);
  //   formData.append("description", description);
  //   formData.append("price", price);
  //   formData.append("image", image);

  //   try {
    
  //     await axios.post("http://localhost:3000/api/stuff", formData, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //         "Content-Type": "multipart/form-data",
  //       },
  //     });
  //     navigate("/dashboard"); // Redirection après ajout
  //   } catch (error) {
  //     console.error("Erreur lors de l'ajout de l'objet", error);
  //   }
  // };

  // return (
  //   <div className="p-6">
  //     <h1 className="text-2xl font-bold mb-4">Ajouter un objet</h1>
  //     <form onSubmit={handleSubmit} className="space-y-4">
  //       <input type="text" placeholder="Titre" className="input" value={title} onChange={(e) => setTitle(e.target.value)} required />
  //       <textarea placeholder="Description" className="input" value={description} onChange={(e) => setDescription(e.target.value)} required />
  //       <input type="number" placeholder="Prix" className="input" value={price} onChange={(e) => setPrice(e.target.value)} required />
  //       <input type="file" className="input" onChange={(e) => setImage(e.target.files[0])} required />
  //       <button type="submit" className="btn">Ajouter</button>
  //     </form>
  //   </div>
  // );

  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("thing", JSON.stringify({ title, description, price }));
    formData.append("image", image);

    try {
      await axios.post("https://backende-murex.vercel.app/api/stuff", formData, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      navigate("/dashboard");
    } catch (error) {
      console.error("Erreur lors de l'ajout", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 border rounded shadow">
      <h2 className="text-xl font-bold">Ajouter un objet</h2>
      <input type="text" placeholder="Titre" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full p-2 border rounded my-2" required />
      <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} className="w-full p-2 border rounded my-2" required />
      <input type="number" placeholder="Prix" value={price} onChange={(e) => setPrice(e.target.value)} className="w-full p-2 border rounded my-2" required />
      <input type="file" onChange={(e) => setImage(e.target.files[0])} className="w-full p-2 border rounded my-2" required />
      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Ajouter</button>
    </form>
  );

};

export default AddThing;
