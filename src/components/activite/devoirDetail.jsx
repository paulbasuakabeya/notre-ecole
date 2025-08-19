
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Download, Printer } from "lucide-react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

const DevoirDetail = () => {
  const [things, setThings] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchThings = async () => {
      try {
        const response = await axios.get("https://revisionbackend-j857.onrender.com/api/stuff", {
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
//  const handlePrint = (thing) => {
//   const originalContent = document.body.innerHTML; // Sauvegarde du contenu original
//   const printContent = `
//     <div style="text-align: center; font-family: Arial, sans-serif; padding: 20px;">
//       <h1>École Internationale XYZ</h1>
//       <p>Adresse: 35, Kananga C/Gombe</p>
//       <hr>
//       <h2>${thing.title}</h2>
//       <p>${thing.description}</p>
//       <p style="font-weight: bold; color: green;">À rendre avant le ${formatDate(thing.date)}</p>
//       <img src="${thing.imageUrl}" alt="${thing.title}" style="max-width: 100%; height: auto; margin-top: 10px;">
//     </div>
//   `;

//   document.body.innerHTML = printContent; // Remplace tout le contenu de la page
//    window.onbeforeprint = () => {
//   document.body.innerHTML = printContent; // Mettre à jour le contenu avant impression
// };

//   window.print(); // Lance l’impression

//   setTimeout(() => {
//     document.body.innerHTML = originalContent; // Restaure le contenu original après l'impression
//     window.location.reload(); // Recharge la page pour éviter tout bug d'affichage
//   }, 1000);
// };
const handleDownloadPDF = async (thing) => {
  const element = document.createElement("div");
  element.innerHTML = `
    <div style="text-align: center; font-family: Arial, sans-serif; padding: 20px;">
      <h1>École Internationale XYZ</h1>
      <p>Adresse: 35, Kananga C/Gombe</p>
      <hr>
      <h2>${thing.title}</h2>
      <p>${thing.description}</p>
      <p style="font-weight: bold; color: green;">À rendre avant le ${formatDate(thing.date)}</p>
      <img src="${thing.imageUrl}" alt="${thing.title}" style="max-width: 100%; height: auto; margin-top: 10px;">
    </div>
  `;

  document.body.appendChild(element);

  const canvas = await html2canvas(element, { scale: 2 });
  const imgData = canvas.toDataURL("image/png");

  const pdf = new jsPDF("p", "mm", "a4");
  const imgWidth = 190;
  const imgHeight = (canvas.height * imgWidth) / canvas.width;
  
  pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);
  pdf.save(`${thing.title}.pdf`);

  document.body.removeChild(element);
};
  return (
    <div className="p-6 min-h-screen">
      <h1 className="text-2xl font-bold mb-4 text-center text-white">Liste de Devoirs</h1>
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
    <Printer size={18} className="mr-2" /> Imprimer
  </button>
  
  <button 
    onClick={() => handleDownloadPDF(thing)} 
    className="bg-blue-500 text-white px-4 py-2 rounded flex items-center justify-center shadow-md hover:bg-blue-600 transition"
  >
    <Download size={18} className="mr-2" /> Télécharger PDF
  </button>
</div>

           
          </div>
        ))}
      </div>
    </div>
  );
};

export default DevoirDetail;
