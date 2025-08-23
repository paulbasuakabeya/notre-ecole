
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Download, Printer } from "lucide-react";
// import { jsPDF } from "jspdf";
// import html2canvas from "html2canvas";

// const DevoirDetail = () => {
//   const [things, setThings] = useState([]);
//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     const fetchThings = async () => {
//       try {
//         const response = await axios.get("https://revisionbackend.vercel.app/api/stuff", {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setThings(response.data);
//       } catch (error) {
//         console.error("Erreur lors de la récupération des objets", error);
//       }
//     };

//     fetchThings();
//   }, [token]);

//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     const options = { day: "numeric", month: "long", year: "numeric" };
//     return date.toLocaleDateString("fr-FR", options);
//   };
// //  const handlePrint = (thing) => {
// //   const originalContent = document.body.innerHTML; // Sauvegarde du contenu original
// //   const printContent = `
// //     <div style="text-align: center; font-family: Arial, sans-serif; padding: 20px;">
// //       <h1>École Internationale XYZ</h1>
// //       <p>Adresse: 35, Kananga C/Gombe</p>
// //       <hr>
// //       <h2>${thing.title}</h2>
// //       <p>${thing.description}</p>
// //       <p style="font-weight: bold; color: green;">À rendre avant le ${formatDate(thing.date)}</p>
// //       <img src="${thing.imageUrl}" alt="${thing.title}" style="max-width: 100%; height: auto; margin-top: 10px;">
// //     </div>
// //   `;

// //   document.body.innerHTML = printContent; // Remplace tout le contenu de la page
// //    window.onbeforeprint = () => {
// //   document.body.innerHTML = printContent; // Mettre à jour le contenu avant impression
// // };

// //   window.print(); // Lance l’impression

// //   setTimeout(() => {
// //     document.body.innerHTML = originalContent; // Restaure le contenu original après l'impression
// //     window.location.reload(); // Recharge la page pour éviter tout bug d'affichage
// //   }, 1000);
// // };
// const handleDownloadPDF = async (thing) => {
//   const element = document.createElement("div");
//   element.innerHTML = `
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

//   document.body.appendChild(element);

//   const canvas = await html2canvas(element, { scale: 2 });
//   const imgData = canvas.toDataURL("image/png");

//   const pdf = new jsPDF("p", "mm", "a4");
//   const imgWidth = 190;
//   const imgHeight = (canvas.height * imgWidth) / canvas.width;
  
//   pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);
//   pdf.save(`${thing.title}.pdf`);

//   document.body.removeChild(element);
// };
//   return (
//     <div className="p-6 min-h-screen">
//       <h1 className="text-2xl font-bold mb-4 text-center text-white">Liste de Devoirs</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
//         {things.map((thing) => (
//           <div key={thing._id} className="bg-white p-4 rounded-lg shadow-md flex flex-col">
//             <div className="flex flex-col md:flex-row items-center gap-4">
//               <div className="flex-1 text-center">
//                 <h2 className="text-xl font-bold underline">{thing.title}</h2>
//                 <p className="text-justify px-6">{thing.description}</p>
//                 <p className="font-semibold text-green-600">À rendre avant le {formatDate(thing.date)}</p>
//               </div>
//               <div className="md:w-1/3 w-full">
//                 <img
//                   src={thing.imageUrl}
//                   alt={thing.title}
//                   className="w-full h-40 object-cover rounded"
//                 />
//               </div>
//             </div>
//             <div className="flex justify-center gap-4 mt-4 print:hidden">
//        <button 
//        onClick={() => handlePrint(thing)} 
//       className="bg-green-500 text-white px-4 py-2 rounded flex items-center justify-center shadow-md hover:bg-green-600 transition" >
//     <Printer size={18} className="mr-2" /> Imprimer
//     </button>
//   <button 
//     onClick={() => handleDownloadPDF(thing)} 
//     className="bg-blue-500 text-white px-4 py-2 rounded flex items-center justify-center shadow-md hover:bg-blue-600 transition"
//   >
//     <Download size={18} className="mr-2" /> Télécharger PDF
//   </button>
// </div>

           
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DevoirDetail;





// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Download } from "lucide-react";
// import { jsPDF } from "jspdf";

// const DevoirDetail = () => {
//   const [things, setThings] = useState([]);
//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     const fetchThings = async () => {
//       try {
//         const response = await axios.get("https://revisionbackend.vercel.app/api/stuff", {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         const reversedThings = response.data.reverse(); // Inverser l'ordre des devoirs
//         setThings(reversedThings);
//       } catch (error) {
//         console.error("Erreur lors de la récupération des objets", error);
//       }
//     };

//     fetchThings();
//   }, [token]);

//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     const options = { day: "numeric", month: "long", year: "numeric" };
//     return date.toLocaleDateString("fr-FR", options);
//   };

//   const handleDownloadPDF = async (thing) => {
//     const pdf = new jsPDF("p", "mm", "a4");
//     const margin = 10;
//     const pageWidth = pdf.internal.pageSize.getWidth() - 2 * margin;
//     const pageHeight = pdf.internal.pageSize.getHeight() - 2 * margin;
//     let y = margin;
//     let pageNumber = 1;

//     pdf.setFont("Arial", "normal");
//     pdf.setFontSize(16);
//     pdf.text("École Internationale XYZ", pageWidth / 2, y, { align: "center" });
//     y += 10;
//     pdf.setFontSize(12);
//     pdf.text("Adresse: 35, Kananga C/Gombe", pageWidth / 2, y, { align: "center" });
//     y += 10;
//     pdf.line(margin, y, pageWidth + margin, y);
//     y += 10;

//     pdf.setFontSize(14);
//     pdf.text(thing.title, margin, y);
//     y += 8;

//     const splitText = pdf.splitTextToSize(thing.description, pageWidth);
//     for (let i = 0; i < splitText.length; i++) {
//       if (y + 10 > pageHeight) {
//         pdf.text(`Page ${pageNumber}`, pageWidth / 2, pageHeight + margin, { align: "center" });
//         pdf.addPage();
//         pageNumber++;
//         y = margin;
//       }
//       pdf.text(splitText[i], margin, y);
//       y += 6;
//     }

//     y += 10;
//     pdf.setTextColor(0, 128, 0);
//     pdf.text(`À rendre avant le ${formatDate(thing.date)}`, margin, y);
//     y += 10;

//     pdf.text(`Page ${pageNumber}`, pageWidth / 2, pageHeight + margin, { align: "center" });
//     pdf.save(`${thing.title}.pdf`);
//   };

//   return (
//     <div className="p-6 min-h-screen">
//       <h1 className="text-2xl font-bold mb-4 text-center text-white">Liste de Devoirs</h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
//         {things.map((thing) => (
//           <div key={thing._id} className="bg-white p-4 rounded-lg shadow-md flex flex-col">
//             <div className="flex flex-col md:flex-row items-center gap-4">
//               <div className="flex-1 text-center">
//                 <h2 className="text-xl font-bold underline">{thing.title}</h2>
//                 <p className="text-justify px-6">{thing.description}</p>
//                 <p className="font-semibold text-green-600">À rendre avant le {formatDate(thing.date)}</p>
//               </div>
//               {thing.imageUrl && (
//                 <div className="md:w-1/3 w-full">
//                   <img src={thing.imageUrl} alt={thing.title} className="w-full h-40 object-cover rounded" />
//                 </div>
//               )}
//             </div>
//             <div className="flex justify-center gap-4 mt-4 print:hidden">
//               <button 
//                 onClick={() => handleDownloadPDF(thing)} 
//                 className="bg-blue-500 text-white px-4 py-2 rounded flex items-center justify-center shadow-md hover:bg-blue-600 transition"
//               >
//                 <Download size={18} className="mr-2" /> Télécharger PDF
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DevoirDetail;
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Download } from "lucide-react";
import { jsPDF } from "jspdf";

const DevoirDetail = () => {
  const [things, setThings] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchThings = async () => {
      try {
        const response = await axios.get("https://revisionbackend.vercel.app/api/stuff", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const reversedThings = response.data.reverse();
        setThings(reversedThings);
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

  const handleDownloadPDF = async (thing) => {
    const pdf = new jsPDF("p", "mm", "a4");
    const margin = 10;
    const pageWidth = pdf.internal.pageSize.getWidth() - 2 * margin;
    const pageHeight = pdf.internal.pageSize.getHeight() - 2 * margin;
    let y = margin;
    let pageNumber = 1;

    // === Charger l'image si elle existe ===
    let imgData = null;
    if (thing.imageUrl) {
      try {
        const response = await fetch(thing.imageUrl);
        const blob = await response.blob();

        imgData = await new Promise((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result);
          reader.readAsDataURL(blob);
        });
      } catch (error) {
        console.error("Erreur lors du chargement de l'image :", error);
      }
    }

    // === En-tête du PDF ===
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(16);
    pdf.text("École Internationale XYZ", pageWidth / 2 + margin, y, { align: "center" });
    y += 8;

    pdf.setFontSize(12);
    pdf.setFont("helvetica", "normal");
    pdf.text("Adresse : 35, Kananga C/Gombe", pageWidth / 2 + margin, y, { align: "center" });
    y += 8;

    pdf.setDrawColor(0);
    pdf.line(margin, y, pageWidth + margin, y);
    y += 10;

    // === Titre du devoir ===
    pdf.setFontSize(14);
    pdf.setFont("helvetica", "bold");
    pdf.text(thing.title, margin, y);
    y += 10;

    // === Ajouter la description ===
    pdf.setFont("helvetica", "normal");
    const splitText = pdf.splitTextToSize(thing.description, pageWidth);
    for (let i = 0; i < splitText.length; i++) {
      if (y + 10 > pageHeight) {
        pdf.text(`Page ${pageNumber}`, pageWidth / 2 + margin, pageHeight + margin, { align: "center" });
        pdf.addPage();
        pageNumber++;
        y = margin;
      }
      pdf.text(splitText[i], margin, y);
      y += 6;
    }

    // === Ajouter la date de rendu ===
    y += 10;
    pdf.setTextColor(0, 128, 0);
    pdf.setFont("helvetica", "bold");
    pdf.text(`À rendre avant le ${formatDate(thing.date)}`, margin, y);

    // === Ajouter le numéro de page du texte ===
    pdf.setTextColor(0, 0, 0);
    pdf.setFontSize(10);
    pdf.text(`Page ${pageNumber}`, pageWidth / 2 + margin, pageHeight + margin, { align: "center" });

    // === Ajouter une nouvelle page pour l'image ===
    if (imgData) {
      pdf.addPage();

      const fullPageWidth = pdf.internal.pageSize.getWidth();
      const fullPageHeight = pdf.internal.pageSize.getHeight();

      // Créer une image temporaire pour obtenir la taille réelle
      const img = new Image();
      img.src = imgData;

      await new Promise((resolve) => {
        img.onload = () => {
          // Calculer les dimensions proportionnelles pour que l'image tienne dans la page
          const imgAspectRatio = img.width / img.height;
          let renderWidth = fullPageWidth - 2 * margin;
          let renderHeight = renderWidth / imgAspectRatio;

          if (renderHeight > fullPageHeight - 2 * margin) {
            renderHeight = fullPageHeight - 2 * margin;
            renderWidth = renderHeight * imgAspectRatio;
          }

          // Centrer l'image sur la page
          const x = (fullPageWidth - renderWidth) / 2;
          const y = (fullPageHeight - renderHeight) / 2;

          // Ajouter l'image
          pdf.addImage(imgData, "JPEG", x, y, renderWidth, renderHeight);

          // Ajouter un numéro de page spécifique à l'image
          pdf.setFontSize(10);
          pdf.text(
            `Page ${pageNumber + 1}`,
            fullPageWidth / 2,
            fullPageHeight - 5,
            { align: "center" }
          );

          resolve();
        };
      });
    }

    // === Télécharger le PDF ===
    pdf.save(`${thing.title}.pdf`);
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
                <p className="font-semibold text-green-600">
                  À rendre avant le {formatDate(thing.date)}
                </p>
              </div>
              {thing.imageUrl && (
                <div className="md:w-1/3 w-full">
                  <img
                    src={thing.imageUrl}
                    alt={thing.title}
                    className="w-full h-40 object-cover rounded"
                  />
                </div>
              )}
            </div>
            <div className="flex justify-center gap-4 mt-4 print:hidden">
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
