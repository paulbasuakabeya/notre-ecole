import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Download } from "lucide-react";
import { Trash } from "lucide-react";
import { Edit } from "lucide-react";
import { Plus } from "lucide-react";

const Dashboard = () => {
  const [things, setThings] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchThings = async () => {
      try {
        const response = await axios.get("https://revisionbackend.vercel.app/api/stuff", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setThings(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des objets", error);
      }
    };

    fetchThings();
  }, [token]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://revisionbackend.vercel.app/api/stuff/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setThings(things.filter((thing) => thing._id !== id));
    } catch (error) {
      console.error("Erreur lors de la suppression", error);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: "numeric", month: "long", year: "numeric" };
    return date.toLocaleDateString("fr-FR", options);
  };

  const handlePrint = (thing) => {
    const printContents = `
      <div>
        <h2>${thing.title}</h2>
        <p>${thing.description}</p>
        <p>À rendre avant le ${formatDate(thing.date)}</p>
        <img src="${thing.imageUrl}" alt="${thing.title}" style="width:100%; height:auto;">
      </div>
    `;
    const newWindow = window.open("", "", "width=800,height=600");
    newWindow.document.write(printContents);
    newWindow.document.close();
    newWindow.focus();
    newWindow.print();
    newWindow.close();
  };

  return (
    <div className="p-6 bg-customBg min-h-screen">
      <h1 className="text-2xl font-bold mb-4 text-center">Liste de Devoirs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-1">
        {things.map((thing) => (
          <div key={thing._id} className="bg-white p-4 rounded shadow flex flex-col">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="flex-1 text-center">
                <h2 className="text-xl font-bold underline">{thing.title}</h2>
                <p className="text-justify px-6">{thing.description}</p>
                <p className="font-semibold text-green-600">À rendre avant le {formatDate(thing.date)}</p>
              </div>
              <div className="md:w-1/3 w-full">
                <img
                  src={thing.imageUrl}
                  alt={thing.title}
                  className="w-full h-40 object-cover rounded"
                />
              </div>
            </div>
            <div className="flex justify-center gap-4 mt-4">
              <Link to={`/navbartwo/edit-thing/${thing._id}`} className="bg-yellow-500 text-white px-4 py-2 rounded"><Edit size={18} /></Link>
              <button onClick={() => handleDelete(thing._id)} className="bg-red-500 text-white px-4 py-2 rounded">
                <Trash size={18} />
              </button>
              <button onClick={() => handlePrint(thing)} className="bg-green-500 text-white px-4 py-2 rounded flex items-center justify-center">
                <Download size={18} className="mr-2" /> 
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 text-center">
        <Link to="/navbartwo/add-thing" className="mt-6 bg-blue-500 text-white p-2 rounded w-40 text-center flex items-center justify-center">
          <Plus size={20} className="mr-2" /> Ajouter un Devoir
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
