const SchoolOverview = () => {
    return (
      <div className="w-full px-16 py-12 font-serif">
        {/* Premier bloc : Énoncé de mission */}
        <div className="flex flex-col lg:flex-row items-start gap-8 mb-12">
          <h2 className="lg:w-1/3 text-2xl  text-black">
            Énoncé de mission
          </h2>
          <p className="lg:w-2/3 text-gray-900 text-end">
            Notre mission à l'école Champion est de développer les capacités et le
            potentiel uniques de chaque enfant en offrant un programme éducatif
            enrichi. Nous visons l'excellence grâce à une approche pratique. De
            riches traditions ancrées dans notre programme d'études innovant font
            de nous des citoyens productifs, attentionnés et intellectuellement
            curieux.
          </p>
        </div>
  
        {/* Deuxième bloc : Nos valeurs fondamentales */}
        <div className="flex flex-col lg:flex-row items-start gap-8 mb-12">
          <h2 className="lg:w-1/3 text-2xl  text-gray-900">
            Nos valeurs fondamentales
          </h2>
          <p className="lg:w-2/3 text-gray-900 text-end">
            Nous avons une culture moderne, pertinente et qui inspire les étudiants
            à se construire un avenir meilleur. Nous sommes déterminés dans notre
            approche de l’apprentissage, créatifs dans notre réflexion et audacieux
            dans nos ambitions.
          </p>
        </div>
  
        {/* Troisième bloc : Notre philosophie */}
        <div className="flex flex-col lg:flex-row items-start gap-8 mb-12">
          <h2 className="lg:w-1/3 text-2xl  text-gray-900">
            Notre philosophie
          </h2>
          <p className="lg:w-2/3 text-gray-900 text-end">
            À l'école Champion, nous suivons une approche pédagogique centrée sur
            l'enfant. Nous veillons à ce qu'elle soit basée sur des observations
            scientifiques de la naissance à l'âge adulte. Nous pensons qu'un enfant
            est naturellement curieux et qu'il est capable d'initier son apprentissage
            dans un environnement favorable et préparé avec soin.
          </p>
        </div>
  
        {/* Quatrième bloc : Historique */}
        <div className="flex flex-col lg:flex-row items-start gap-8 mb-12">
          <h2 className="lg:w-1/3 text-2xl  text-gray-900">
            Historique
          </h2>
          <p className="lg:w-2/3 text-gray-900 text-end">
            Fondée en 1902, l'école Champion est l'une des institutions éducatives
            les plus anciennes et respectées du Texas. Depuis plus d'un siècle,
            nous avons formé des générations d'élèves en leur inculquant des valeurs
            d'intégrité, d'excellence et de respect mutuel. Aujourd'hui, nous
            poursuivons notre engagement envers l'innovation pédagogique tout en
            préservant nos traditions éducatives fondamentales.
          </p>
        </div>
  
        {/* Cinquième bloc : Notre engagement */}
        <div className="flex flex-col lg:flex-row items-start gap-8">
          <h2 className="lg:w-1/3 text-2xl text-gray-900">
            Notre engagement
          </h2>
          <p className="lg:w-2/3 text-gray-900 text-end">
            L'école Champion s'engage à offrir un environnement d'apprentissage
            sécurisé, inclusif et dynamique. Nous encourageons la collaboration entre
            étudiants, enseignants et parents pour favoriser un développement harmonieux.
            Notre approche éducative repose sur la passion, la persévérance et le désir
            de toujours mieux faire pour préparer nos élèves à un avenir brillant.
          </p>
        </div>
      </div>
    );
  };
  
  export default SchoolOverview;
  