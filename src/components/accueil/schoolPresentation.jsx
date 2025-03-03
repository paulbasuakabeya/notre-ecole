import { useState, useEffect } from "react";
import un from '../../assets/images/eleve-maternel.jpg';
import deux from '../../assets/images/eleve-biologie.jpeg';
import trois from '../../assets/images/madame-primaire.jpg';
// import quatre from '../../assets/images/eleve-madome.jpg';

const data = [
  {
    title: "Bienvenue à l'École du Savoir",
    description: "Notre école offre un cadre d’apprentissage idéal pour développer les compétences académiques et personnelles.",
    smallText: "Une éducation de qualité pour un avenir meilleur.",
    bgImage: un,
  },
  {
    title: "Un Environnement d’Excellence",
    description: "Nous mettons l'accent sur l'innovation, la discipline et la réussite de chaque élève.",
    smallText: "Des enseignants qualifiés et des méthodes modernes.",
    bgImage: deux,
  },
  {
    title: "Apprendre, Grandir, Réussir",
    description: "Nos programmes éducatifs sont adaptés aux défis du 21e siècle.",
    smallText: "Une école tournée vers l’avenir.",
    bgImage: trois,
  },
];

 const SchoolPresentation= () =>{
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 5000); // Changement toutes les 5 secondes

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative w-full h-screen flex flex-col justify-center items-center text-white text-center px-6"
      style={{
        backgroundImage: `url(${data[index].bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 3s ease-in-out",
      }}
    >
      {/* Overlay pour améliorer la lisibilité du texte */}
      <div className="absolute inset-0 bg-black/25"></div>

      {/* Contenu avec animation */}
      <div className="relative z-10 ">
        <h1
          key={data[index].title}
          className="text-4xl md:text-6xl font-bold mb-4 animate-fade"
        >
          {data[index].title}
        </h1>
        <p
          key={data[index].description}
          className="text-lg md:text-xl max-w-2xl mb-2 animate-slide"
        >
          {data[index].description}
        </p>
        <span
          key={data[index].smallText}
          className="text-sm md:text-base animate-bounce"
        >
          {data[index].smallText}
        </span>
      </div>
    </div>
  );
}
export default SchoolPresentation;