 import React, { useState, useEffect } from "react";
 import un from '../../assets/images/enfant-africain.jpg';
 import deux from '../../assets/images/enfants-profitent.jpg';
 import trois from '../../assets/images/gros-plan-mains-empilees.jpg';
 import quatre from '../../assets/images/eleve-maternel.jpg';


// Données pour le carrousel
const carouselData = [
  {
    id: 1,
    text: "Un enseignement de qualité pour un avenir brillant",
    image: un,
    bgColor: "bg-red-500",
  },
  {
    id: 2,
    text: "Un cadre idéal pour apprendre et s’épanouir",
    image: deux,
    bgColor: "bg-blue-500",
  },
  {
    id: 3,
    text: "Formation complète, de la maternelle à l’humanité",
    image: trois,
    bgColor: "bg-green-500",
  },
  {
    id: 4,
    text: "Des outils numériques modernes pour un apprentissage innovant",
    image: quatre,
    bgColor: "bg-yellow-500",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Changement automatique de slide toutes les 7 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
    }, 7000);
    return () => clearInterval(interval); // Nettoyage
  }, []);

  // Élément courant
  const currentItem = carouselData[currentIndex];

  return (
    <div className="relative w-full h-96 overflow-hidden">
      {/* Conteneur de l'image ou de la couleur */}
      <div
        className={`absolute inset-0 flex justify-center items-center transition-all duration-100 ${
          currentItem.image ? "bg-transparent" : currentItem.bgColor
        }`}
      >
        {currentItem.image ? (
          <img
            src={currentItem.image}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className={`w-full h-full ${currentItem.bgColor}`}></div>
        )}
      </div>

      {/* Conteneur de texte */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-6 bg-black bg-opacity-25">
        <h2 className="text-xl md:text-2xl font-bold mb-4">{currentItem.text}</h2>
      </div>

      {/* Indicateurs du carrousel */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {carouselData.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
