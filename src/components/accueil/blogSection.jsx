import ecole from '../../assets/images/batiment-ecole.jpg'


export default function BlogSection() {
    return (
      <section className="w-full ">
        {/* Première ligne avec le titre et la ligne à droite */}
        <div className="grid md:grid-cols-2 gap-8 p-16">
          <h1 className="text-4xl md:text-6xl  text-gray-800 w-1/2 ">
            L'apprentissage commence avec nous
          </h1>
          <div className="w-1/6 border-t border-black mt-8"></div>
        </div>
  
        {/* Deuxième ligne avec les blocs de texte */}
        <div className="grid md:grid-cols-2 gap-8 p-16">
          {/* Premier paragraphe à gauche */}
          <p className="text-lg text-gray-700">
            À Champion School, nous offrons un environnement favorable et inspirant pour que les jeunes esprits curieux puissent apprendre et grandir avec nous. Notre passion pour l'apprentissage signifie que nous obtenons plus que des résultats exceptionnels. Nous nous efforçons de former des penseurs confiants et créatifs et visons à offrir une éducation véritablement pertinente pour leur avenir.
          </p>
          {/* Deuxième paragraphe à droite */}
          <p className="text-lg text-gray-700">
            Nous sommes une académie d'apprentissage précoce axée sur le développement socio-émotionnel et l'apprentissage précoce de la lecture et du calcul. Nos étudiants repartent avec le caractère et la confiance nécessaires pour laisser leur empreinte dans le monde, équipés des connaissances et des compétences concrètes qui leur permettent d'avancer dans le secteur qu'ils peuvent servir.
          </p>
        </div>



        {/* <section className="flex flex-col md:flex-row w-full h-screen "> */}
        <section className="flex flex-col md:flex-row w-full">

                {/* Bloc de gauche */}
                <div className="relative flex flex-col justify-center items-start w-full md:w-1/2 bg-blue-600 text-white p-8">
                  {/* Texte flou en arrière-plan */}
                  <h1 className="absolute top-10 left-5 text-6xl md:text-8xl font-bold text-white opacity-20">
                    Qui sommes-nous ?
                  </h1>
          
                  {/* Texte principal */}
                  <h2 className="text-2xl md:text-4xl font-bold relative z-10">
                    Bienvenue au C.S. Lestonnac Mobokoli
                  </h2>
                  <p className="mt-4 text-lg relative z-10">
                    Le Complexe Scolaire Lestonnac Mobokoli est une école privée agréée fondée en 2009 et située à Selembao en République Démocratique du Congo. Elle appartient aux Sœurs de l’Ordre de la Compagnie de Marie-Notre-Dame.
                  </p>
                </div>
          
                {/* Bloc de droite avec image */}
                <div className="w-full md:w-1/2">
                  <img
                    src={ecole} 
                    alt="École"
                    className="w-full h-full object-cover"
                  />
                </div>
              </section>



      </section>
    );
  }
  