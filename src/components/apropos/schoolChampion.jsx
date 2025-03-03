// import directorImage from "../../assets/images/headmaster.jpg"; // Assurez-vous que l'image est dans le bon dossier

// const SchoolChampion = () => {
//   return (
//     <div className="w-full p-16 ">
//       {/* Premier bloc */}
//       <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 mb-12 px-16">
//         {/* Texte à gauche */}
//         <div className="lg:w-1/2 text-center lg:text-left">
//           <h1 className="text-6xl  text-gray-900">
//             L'école championne du Texas
//           </h1>
//           <div className="w-20 h-1 bg-blue-500 mt-4"></div>
//         </div>

//         {/* Texte à droite */}
//         <div className="lg:w-1/2 text-gray-700 text-justify">
//           <p>
//             En tant qu'établissement d'enseignement le plus ancien en activité,
//             la Champion School s'engage à fournir une éducation rigoureuse sur
//             le plan académique à des élèves qui quitteront l'école prêts à mener
//             une vie de leadership et de service à leur communauté. De
//             l'alphabétisation à la musique et à l'art, chaque journée à la
//             Champions School est remplie d'activités à la fois enrichissantes et
//             amusantes.
//           </p>
//           <p className="mt-4">
//             Nous nous efforçons de nous engager auprès des étudiants que nous
//             avons le privilège de servir, au sein de notre association d'anciens
//             élèves, de notre corps professoral et de notre personnel dévoués et
//             talentueux. Nous sommes également fiers d'avoir le groupe le plus
//             actif et le plus serviable de partenaires, de parents visionnaires,
//             de sympathisants, d'anciens élèves et d'amis.
//           </p>
//         </div>
//       </div>

//       {/* Deuxième bloc */}
//       <div className="  flex flex-col lg:flex-row items-center lg:items-start gap-8 px-16 py-16">
//         {/* Image à gauche */}
//         <div className="lg:w-1/3 w-full">
//           <img
//             src={directorImage}
//             alt="Directeur"
//             className="w-80 rounded-lg shadow-lg"
//           />
//         </div>

//         {/* Texte à droite */}
//         <div className="lg:w-2/3 text-5xl text-gray-500 text-justify py-12">
//           <p>
//             Chaque jour à l’école Champions est comme une bénédiction avec des
//             étudiants actifs et des membres du personnel talentueux autour.
//           </p>
//           <p className="mt-4 font-semibold text-xl text-black">Jonathan Doe — Directeur</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SchoolChampion;




import directorImage from "../../assets/images/headmaster.jpg"; // Assurez-vous que l'image est dans le bon dossier

const SchoolChampion = () => {
  return (
    <div className="w-full p-8 md:p-16">
      {/* Premier bloc */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 mb-12 px-8 md:px-16">
        {/* Texte à gauche */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl md:text-6xl text-gray-900">
            L'école championne du Texas
          </h1>
          <div className="w-20 h-1 bg-blue-500 mt-4"></div>
        </div>

        {/* Texte à droite */}
        <div className="lg:w-1/2 text-gray-700 text-justify">
          <p>
            En tant qu'établissement d'enseignement le plus ancien en activité,
            la Champion School s'engage à fournir une éducation rigoureuse sur
            le plan académique à des élèves qui quitteront l'école prêts à mener
            une vie de leadership et de service à leur communauté. De
            l'alphabétisation à la musique et à l'art, chaque journée à la
            Champions School est remplie d'activités à la fois enrichissantes et
            amusantes.
          </p>
          <p className="mt-4">
            Nous nous efforçons de nous engager auprès des étudiants que nous
            avons le privilège de servir, au sein de notre association d'anciens
            élèves, de notre corps professoral et de notre personnel dévoués et
            talentueux. Nous sommes également fiers d'avoir le groupe le plus
            actif et le plus serviable de partenaires, de parents visionnaires,
            de sympathisants, d'anciens élèves et d'amis.
          </p>
        </div>
      </div>

      {/* Deuxième bloc */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 px-8 md:px-16 py-8 md:py-16">
        {/* Image à gauche */}
        <div className="lg:w-1/3 w-full">
          <img
            src={directorImage}
            alt="Directeur"
            className="w-80 rounded-lg shadow-lg"
          />
        </div>

        {/* Texte à droite */}
        <div className="lg:w-2/3 text-xl md:text-5xl text-gray-500 text-justify py-8 md:py-12">
          <p>
            Chaque jour à l’école Champions est comme une bénédiction avec des
            étudiants actifs et des membres du personnel talentueux autour.
          </p>
          <p className="mt-4 font-semibold text-lg md:text-xl text-black">Jonathan Doe — Directeur</p>
        </div>
      </div>
    </div>
  );
};

export default SchoolChampion;
