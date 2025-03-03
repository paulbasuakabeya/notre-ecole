import React from "react";
import img1 from "../../assets/images/basket.jpg";
import img2 from "../../assets/images/basketUn.jpg";
import img3 from "../../assets/images/basketDeux.jpg";
import img4 from "../../assets/images/basket.jpg";

const ExtracurricularActivities = () => {
  const activities = [
    {
      image: img1,
      title: "Activités Sportives",
      description:
        "Nos programmes sportifs aident les élèves à développer leur endurance, leur discipline et l'esprit d'équipe. Grâce à diverses disciplines comme le football, le basketball et l'athlétisme, nos élèves acquièrent des compétences physiques et mentales essentielles. Ces activités encouragent également la camaraderie et le respect des règles du jeu.",
    },
    {
      image: img2,
      title: "Cours de Musique",
      description:
        "Nos cours de musique permettent aux élèves d'explorer leurs talents et d'apprendre différents instruments. Ils ont l'opportunité de jouer du piano, de la guitare, du violon et d'autres instruments tout en développant leur oreille musicale. La musique favorise la concentration, la créativité et l'expression personnelle, tout en offrant une ambiance harmonieuse à l'école.",
    },
    {
      image: img3,
      title: "Ateliers de Théâtre",
      description:
        "Le théâtre encourage l'expression de soi, la confiance et la créativité chez nos élèves. À travers des pièces, des improvisations et des mises en scène, ils apprennent à mieux communiquer et à gérer leurs émotions. Ces ateliers leur offrent un espace pour s’exprimer librement tout en découvrant le monde des arts de la scène.",
    },
    {
      image: img4,
      title: "Ateliers d'Art",
      description:
        "Nos cours d'art permettent aux élèves de s'exprimer à travers la peinture, le dessin et la sculpture. En développant leur sens artistique, ils découvrent différentes techniques et apprennent à voir le monde sous un autre angle. Ces activités stimulent l’imagination et favorisent un esprit critique et inventif.",
    },
  ];

  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 py-12 space-y-12 overflow-hidden">
      {activities.map((activity, index) => (
        <div key={index}>
          <div
            className={`flex flex-col lg:flex-row items-center gap-8 ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            }`}
          >
            {/* Image */}
            <div className="lg:w-1/2 w-full">
              <img
                src={activity.image}
                alt={activity.title}
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Texte */}
            <div className="lg:w-1/2 w-full text-center lg:text-left">
              <h2 className="text-3xl font-bold text-gray-900">{activity.title}</h2>
              <p className="text-gray-700 mt-2">{activity.description}</p>
            </div>
          </div>

          {/* Ligne de séparation */}
          {index < activities.length - 1 && (
            <hr className="my-8 border-t-4 border-gray-400 w-full" />
          )}
        </div>
      ))}
    </div>
  );
};

export default ExtracurricularActivities;
