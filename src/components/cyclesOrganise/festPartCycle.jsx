import React, { useState, useEffect } from "react";
import MaternelUne from '../../assets/images/eleve-maternel.jpg'
import MaternelDeux from '../../assets/images/enfant-africain.jpg'
import MaternelTrois from '../../assets/images/jeunes-enfants-autistes.jpg'

import PrimaireUne from '../../assets/images/groupe-enfants-court.jpg'
import PrimaireDeux from '../../assets/images/tableau-noir.jpg'
import PrimaireTrois from '../../assets/images/photo8.jpg'
import PrimaireQuatre from '../../assets/images/enseignant-aidant-enfants.jpg'

import SecondaireUne from '../../assets/images/qualite-superieure.jpg'
import SecondaireDeux from '../../assets/images/Eleve.jpg'
import SecondaireTrois from '../../assets/images/CSEC.jpg'

import ThreeBlockLayout from "../props/threeBlock";

import Couture from '../../assets/images/machine-couture.jpg';
import Biologie from '../../assets/images/biologie-ecole.jpeg';
import Informatique from '../../assets/images/CSEC.jpg';
import Langue from '../../assets/images/langues.jpg';
import Literaire from '../../assets/images/litteraire.jpeg';
import Pedagogie from '../../assets/images/madame-primaire.jpg';


const ProgrammeApercu = () => {
  const sciences = [
    { title: "Cours de Langue", image: Langue, description: "L'étude des nombres, des formes et des structures logiques." },
    { title: "Coupe et Couture", image: Couture, description: "L'analyse des lois fondamentales qui régissent l'univers." },
    { title: "Literaire", image: Literaire, description: "L'étude des substances, de leurs réactions et de leurs transformations." },
    { title: "Biologie-Chimie", image: Biologie, description: "La science du vivant et des organismes, de la cellule à l'écosystème." },
    { title: "Informatique", image: Informatique, description: "L'étude des algorithmes, de la programmation et des systèmes informatiques." },
    { title: "Pedagogie-Génerale", image: Pedagogie, description: "L'étude des espaces terrestres et des interactions entre l'homme et son environnement." }
  ];

  return (
    <div className="w-full p-6 space-y-8 ">

   {/* <div className="flex flex-col items-center text-center px-6 py-8 ">
    </div> */}
       <h2 className="text-2xl font-bold text-center mb-6">
      Sections Organisées :
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sciences.map((science, index) => (
          <div key={index} className=" rounded-lg p-4">
            <img src={science.image} alt={science.title} className="w-full h-80 object-cover rounded-md" />
            <h2 className="text-xl font-semibold text-gray-800 mt-3">{science.title}</h2>
            <p className="text-gray-600 font-semibold text-sm mt-2">{science.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};


const temoignages = [
  {
    id: 1,
    img: '',
    nom: "Ir Basua Kabeya",
    texte: "Une école qui m'a donné des bases solides pour mon avenir. Merci pour cette formation exceptionnelle !",
  },
  {
    id: 2,
    img: '',
    nom: "Évêque Samson Kadikuilu",
    texte: "Un établissement engagé dans l'excellence éducative. Je suis fier d'avoir confié mes enfants à cette école.",
  },
  {
    id: 3,
    img: '',
    nom: "Dg Chris Tshibindi",
    texte: "Des enseignants dévoués et un cadre d’apprentissage inspirant. Mon passage ici a été inoubliable.",
  },
  {
    id: 4,
    img: '',
    nom: "As. Gregorine Mulamba",
    texte: "Une école qui allie rigueur et bienveillance. Merci pour l’éducation de qualité offerte à nos enfants.",
  },
];

// Générer des couleurs aléatoires
const getRandomColor = () => {
  const colors = ["bg-red-500", "bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-purple-500"];
  return colors[Math.floor(Math.random() * colors.length)];
};

// Récupérer les initiales d'un nom
const getInitials = (name) => {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();
};

const Testimonials = () => {
  return (
    <div className="bg-gray-800 text-white py-10 px-6">
      <h2 className="text-2xl font-bold text-center mb-6">
      Témoignages
      </h2>
      <p className="text-center italic">"Une école qui prépare nos enfants pour l'avenir avec excellence." - Parent</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {temoignages.map((temoignage) => (
          <div
            key={temoignage.id}
            className="text-center  p-4 rounded-lg shadow-lg"
          >
            {temoignage.img ? (
              <img
                src={temoignage.img}
                alt={temoignage.nom}
                className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
              />
            ) : (
              <div
                className={`w-32 h-32 mx-auto rounded-full flex items-center justify-center text-white text-xl font-bold mb-4 ${getRandomColor()}`}
              >
                {getInitials(temoignage.nom)}
              </div>
            )}
            <p className="font-medium text-lg">{temoignage.nom}</p>
            <p className="text-sm text-whitemt-2 italic">
              "{temoignage.texte}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};


const Header = () => (
    <header className="relative text-center py-12 bg-blue-600 text-white">
      <h1 className="text-4xl font-bold relative z-10">Découvrez les différentes étapes du parcours scolaire</h1>
      <p className="text-lg mt-2 relative z-10"></p>
      <h1 className="absolute inset-0 text-8xl font-bold text-white opacity-20 top-1/2 transform -translate-y-1/2">Cycles Organisés</h1>
    </header>
  );
  
  const CyclesOrganises = () => {
    const cycleImages = {
      Une: [MaternelUne, MaternelDeux, MaternelTrois],
      Deux: [PrimaireUne, PrimaireDeux, PrimaireTrois, PrimaireQuatre],
      Trois: [SecondaireUne, SecondaireDeux, SecondaireTrois]
    };
  
    const cycles = [
      {
        title: "Cycle Maternel",
        text: "L’école maternelle accueille les enfants au début de l’instruction obligatoire qui débute à 3 ans. Elle est le plus souvent organisée en petite, moyenne et grande section, préparant les enfants à l’entrée en école primaire.",
        images: cycleImages.Une
      },
      {
        title: "Cycle Primaire",
        text: "L’école primaire regroupe les classes du CP au CM2. Elle vise à donner aux élèves les bases fondamentales en lecture, écriture et mathématiques, ainsi qu’une introduction aux sciences et à la culture générale.",
        images: cycleImages.Deux
      },
      {
        title: "Cycle Secondaire",
        text: "Le cycle secondaire comprend le collège et le lycée. Il prépare les élèves aux examens nationaux et à l’orientation vers des études supérieures ou des formations professionnelles adaptées à leur projet d’avenir.",
        images: cycleImages.Trois
      }
    ];
  
    const [imageIndices, setImageIndices] = useState(cycles.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndices((prevIndices) =>
        prevIndices.map((index, i) => (index + 1) % cycles[i].images.length)
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 md:px-16 py-6">
      {cycles.map((cycle, index) => (
        <div
          key={index}
          className={`${
            index < 3 ? "bg-white shadow-lg" : ""
          } rounded-lg overflow-hidden text-center`}
        >
          <div
            className="w-full h-48 bg-cover bg-center transition-all duration-[5000ms] ease-in-out"
            style={{ backgroundImage: `url(${cycle.images[imageIndices[index]]})` }}
          ></div>
          <div className="p-4">
            <h3 className="text-xl font-bold text-gray-800">{cycle.title}</h3>
            <p className="text-gray-600 mt-2">{cycle.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    { question: "Quels sont les horaires de cours ?", answer: "Les cours se déroulent de 7h à 17h." },
    { question: "Quels sont les frais d'inscription ?", answer: "Les frais varient en fonction du cycle." }
  ];

  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4 text-center">FAQ</h2>
      <div>
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            <button className="w-full text-left font-semibold" onClick={() => setOpenIndex(index === openIndex ? null : index)}>
              {faq.question}
            </button>
            {openIndex === index && <p className="mt-2 text-gray-700">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};


const FestPartOfCycle = () => {
  return (
    <div>

      <Header />
      <CyclesOrganises />
      <ProgrammeApercu/>
      <ThreeBlockLayout/>
      <Testimonials />

      <FAQ />
    </div>
  );
};

export default FestPartOfCycle;

