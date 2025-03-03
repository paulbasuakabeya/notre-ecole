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

   <div className="flex flex-col items-center text-center px-6 py-8 ">
      <p className="text-2xl md:text-5xl font-light text-gray-800 max-w-5xl text-justify">
        "Notre objectif est d’inspirer nos étudiants à rêver davantage, à apprendre davantage, 
        à faire davantage et à devenir davantage dans leurs parcours de vie respectifs."
      </p>
      <span className="mt-4 text-lg font-semibold text-gray-700">
        — Jonathan Doe, Directeur
      </span>
    </div>

      {/* Bloc du haut */}
      <div className="flex flex-col md:flex-row justify-between items-center  p-6 rounded-lg">
        {/* Texte de gauche */}

        <div className="w-full md:w-1/3 text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-blue-700">
            Aperçu du programme d'études
          </h1>
        </div>
        
        {/* Titre de droite */}
        
        <div className="w-full md:w-1/2 text-left space-y-2">
          <div className="w-16 h-1 bg-blue-500 mb-2"></div>
          <p className="text-gray-700 text-sm md:text-base">
            L'École Champion a pour objectif d'offrir à tous nos élèves un programme d'études large et équilibré qui propose des activités enrichissantes et stimulantes pour les préparer à la meilleure vie sociale et culturelle.
          </p>
        </div>
      </div>

      {/* Bloc des sciences */}
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

export default ProgrammeApercu;
