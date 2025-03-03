import { useState } from "react";
import background from '../../assets/images/etude-geste-canv.jpg'

const EntreDashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Simule l'état de connexion

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-fixed bg-cover bg-center p-6"  style={{ backgroundImage: `url(${background})` }}>
      {isLoggedIn ? (
        <div className="w-full max-w-4xl  p-6 rounded-xl ">
          <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">
            Bienvenue sur le Portail Administrateur
          </h1>
          <p className="text-gray-700 text-center text-white">
            Notre établissement propose un enseignement de qualité du niveau maternel au secondaire, 
            avec un encadrement rigoureux et des infrastructures modernes.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="p-4 bg-blue-50 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-blue-700">Maternelle</h2>
              <p className="text-gray-600">Un cadre sécurisé et ludique pour l'éveil des plus petits.</p>
            </div>

            <div className="p-4 bg-green-50 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-green-700">Primaire</h2>
              <p className="text-gray-600">Une formation de base solide pour assurer la réussite académique.</p>
            </div>

            <div className="p-4 bg-yellow-50 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-yellow-700">Secondaire</h2>
              <p className="text-gray-600">Un programme enrichi pour préparer les élèves aux défis futurs.</p>
            </div>

            <div className="p-4 bg-red-50 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-red-700">Humanité</h2>
              <p className="text-gray-600">Une spécialisation adaptée aux ambitions académiques et professionnelles.</p>
            </div>
          </div>

         
        </div>
      ) : (
        <div className="text-center">
        
        </div>
      )}
    </div>
  );
};

export default EntreDashboard;
