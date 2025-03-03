import React, { useState, useEffect } from "react";
import image1 from "../../assets/images/basket.jpg";
import image2 from "../../assets/images/basketUn.jpg"; // Ajoute plus d'images si nécessaire
import image3 from "../../assets/images/basketDeux.jpg";

const images = [image1, image2, image3]; // Tableau des images

const ActivitiesSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change toutes les 5 secondes

    return () => clearInterval(interval);
  }, []);

  const activities = [
    {
      title: "Arts du spectacle",
      description:
        "Avec des professionnels à bord, nous formons nos étudiants à la danse, au théâtre, à la peinture et plus encore.",
    },
    {
      title: "Sport et Bien-être",
      description:
        "Encourage un mode de vie sain à travers le football, le basketball et des séances de gymnastique.",
    },
    {
      title: "Musique et Danse",
      description:
        "Développe la créativité et l’expression personnelle avec des cours de musique et de danse moderne.",
    },
    {
      title: "Clubs Scientifiques",
      description:
        "Stimule la curiosité intellectuelle avec des ateliers de robotique, de chimie et d’astronomie.",
    },
    {
      title: "Engagement Communautaire",
      description:
        "Implique les élèves dans des projets sociaux pour favoriser l’esprit de solidarité et de responsabilité.",
    },
  ];

  return (
    <section className="flex flex-col md:flex-row items-center w-full px-20 py-6 gap-8 font-serif">
      {/* Bloc Image */}
      <div className="relative w-full md:w-1/2 m-8">
        <div className="absolute -left-8 -bottom-8 w-full h-full bg-blue-500 rounded-lg"></div>
        <img
          src={images[currentImage]}
          alt="Activités parascolaires"
          className="relative w-full  h-[400px] object-cover rounded-lg shadow-lg transition-opacity duration-1000 ease-in-out opacity-0 "
          style={{ animation: "fade 1s forwards" }}
        />
      </div>

      {/* Bloc Texte */}
      <div className="w-full md:w-1/2 flex flex-col px-16 mt-10 md:mt-0">
        {/* Titre */}
        <h2 className="text-3xl md:text-5xl font-semibold text-gray-800">
          Nos activités parascolaires
        </h2>
        <div className="w-16 h-1 bg-blue-500 mt-2 mb-6"></div>

        {/* Liste des activités */}
        <div className="grid gap-6">
          {activities.map((activity, index) => (
            <div key={index} className="flex items-start gap-4">
              {/* Point bleu avec cercle blanc */}
              <div className="w-5 h-5 flex items-center justify-center bg-blue-500 rounded-full">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>

              {/* Texte */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {activity.title}
                </h3>
                <p className="text-gray-600">{activity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animation CSS */}
      <style>
        {`
          @keyframes fade {
            from { opacity: 0; }
            to { opacity: 1; }
          }
        `}
      </style>
    </section>
  );
};

export default ActivitiesSection;
