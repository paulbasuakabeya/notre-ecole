

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Download, Printer } from "lucide-react";

const DevoirDetail = () => {
  const [things, setThings] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchThings = async () => {
      try {
        const response = await axios.get("https://backende-ten.vercel.app/api/stuff", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setThings(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des objets", error);
      }
    };

    fetchThings();
  }, [token]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: "numeric", month: "long", year: "numeric" };
    return date.toLocaleDateString("fr-FR", options);
  };

  const handlePrint = (thing) => {
    const printContents = `
      <div class="p-6 text-black">
        <!-- En-tête de l'établissement -->
        <div class="text-center mb-4">
          <h1 class="text-2xl font-bold">École Internationale XYZ</h1>
          <p>Adress: 35,Kananga C/Gombe</p>
          <p class="text-md font-semibold">Excellence et Discipline</p>
          <hr class="my-2 border-t-2 border-gray-800">
        </div>

        <!-- Contenu du devoir -->
        <h2 class="text-xl font-bold underline">${thing.title}</h2>
        <p>${thing.description}</p>
        <p class="font-semibold text-green-600">À rendre avant le ${formatDate(thing.date)}</p>
        <img src="${thing.imageUrl}" alt="${thing.title}" class="w-full h-auto mt-4">
      </div>
    `;
    const newWindow = window.open("", "", "width=800,height=600");
    newWindow.document.write(printContents);
    newWindow.document.close();
    newWindow.focus();
    newWindow.print();
    newWindow.close();
  };

  // const handlePrintAll = () => {
  //   const printContents = `
  //     <div class="p-6 text-black">
  //       <div class="text-center mb-4">
  //         <h1 class="text-2xl font-bold">École Internationale XYZ</h1>
  //         <p class="text-md font-semibold">Excellence et Discipline</p>
  //         <hr class="my-2 border-t-2 border-gray-800">
  //       </div>

  //       ${things.map(thing => `
  //         <div class="mb-6">
  //           <h2 class="text-xl font-bold underline">${thing.title}</h2>
  //           <p>${thing.description}</p>
  //           <p class="font-semibold text-green-600">À rendre avant le ${formatDate(thing.date)}</p>
  //           <img src="${thing.imageUrl}" alt="${thing.title}" class="w-full h-auto mt-4">
  //           <hr class="my-4 border-t border-gray-400">
  //         </div>
  //       `).join("")}
  //     </div>
  //   `;

  //   const newWindow = window.open("", "", "width=800,height=600");
  //   newWindow.document.write(printContents);
  //   newWindow.document.close();
  //   newWindow.focus();
  //   newWindow.print();
  //   newWindow.close();
  // };

  return (
    <div className="p-6 min-h-screen">
      <h1 className="text-2xl font-bold mb-4 text-center text-white">Liste de Devoirs</h1>

      {/* Bouton pour imprimer tous les devoirs */}
      <div className="flex justify-center mb-4">
        {/* <button 
          onClick={handlePrintAll} 
          className="bg-blue-500 text-white px-4 py-2 rounded flex items-center shadow-md hover:bg-blue-600 transition"
        >
          <Printer size={18} className="mr-2" /> Imprimer tout
        </button> */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
        {things.map((thing) => (
          <div key={thing._id} className="bg-white p-4 rounded-lg shadow-md flex flex-col">
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
            <div className="flex justify-center gap-4 mt-4 print:hidden">
              <button 
                onClick={() => handlePrint(thing)} 
                className="bg-green-500 text-white px-4 py-2 rounded flex items-center justify-center shadow-md hover:bg-green-600 transition"
              >
                <Download size={18} className="mr-2" /> Imprimer
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DevoirDetail;
