import logo from '../../assets/images/logo-ecole.jpg'

import { FaFacebook, FaWhatsapp, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800 py-8">
      <div className="container mx-auto px-4">
        {/* Trois blocs principaux */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Bloc Infos École */}
          <div className="flex flex-col space-y-2 ">
            <h2 className="text-xl font-bold">Nom de l'École</h2>
            <p><strong>Adresse :</strong> 125 Rue Exemple</p>
            <p><strong>Ville :</strong> Kinshasa</p>
            <p><strong>Commune :</strong> Gombe</p>
            <p><strong>Téléphone :</strong> +243 900 000 000</p>
            <p><strong>Email :</strong> contact@ecole.com</p>
            <p><strong>Horaires :</strong> Lun - Ven : 8h - 17h</p>
          </div>

          {/* Bloc Navigation */}
          <div className="flex flex-col space-y-2 font-bold">
            <h2 className="text-xl font-bold">Navigation</h2>
            <a href="/" className="hover:text-blue-600">Accueil</a>
            <a href="/apropos" className="hover:text-blue-600">À propos</a>
            <a href="/activites" className="hover:text-blue-600">Activités</a>
            <a href="/cycles-organises" className="hover:text-blue-600">Cycles organisés</a>
            <a href="/devoir-et-communication" className="hover:text-blue-600">Devoir et communication</a>
            <a href="/contact" className="hover:text-blue-600">Contact</a>
          </div>

          {/* Bloc Réseaux sociaux */}
          <div className="flex flex-col space-y-2 items-center">
            <h2 className="text-xl font-bold">Suivez-nous sur</h2>
            <div className="flex flex-col space-y-2">
              <a href="#" className="flex items-center space-x-2 hover:text-blue-600">
                <FaFacebook /> <span>Facebook</span>
              </a>
              <a href="#" className="flex items-center space-x-2 hover:text-blue-600">
                <FaTwitter /> <span>Twitter</span>
              </a>
              <a href="#" className="flex items-center space-x-2 hover:text-green-500">
                <FaWhatsapp /> <span>WhatsApp</span>
              </a>
              <a href="#" className="flex items-center space-x-2 hover:text-pink-500">
                <FaInstagram /> <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>

        {/* Ligne de séparation */}
        <div className="border-t-2 border-gray-300 my-6"></div>

        {/* Section Newsletter & Logo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
         

<div className="flex flex-col items-center space-y-2">
          <h2 className="text-lg font-bold text-center md:text-left">Inscrivez-vous à notre newsletter</h2>
          <form className="flex flex-col  md:flex-col items-center space-y-2 md:space-y-2">
            <label htmlFor="email" className="sr-only">E-mail *</label>
            <input
              id="email"
              type="email"
              placeholder="Adresse email"
              className="p-2 rounded-md text-gray-800"
              required
            />
            <button
              type="submit"
              className="bg-yellow-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md mt-2 md:mt-0 md:ml-2"
            >
              S'inscrire
            </button>
          </form>
        </div>
          

          {/* Logo et Texte */}
          <div className="flex flex-col items-center space-y-2 w-full">
             <p className="text-center font-bold">Une éducation de qualité pour un avenir meilleur.</p>
            <img src={logo} alt="Logo" className="h-16 w-16" />
          </div>
        </div>

        {/* Ligne centrée */}
        <div className="flex justify-center my-6">
          <div className="w-3/5 border-t-2 border-gray-300"></div>
        </div>

        {/* Copyright */}
        <p className="text-center text-gray-600 text-sm">&copy; 2025 Nom de l'École. Tous droits réservés.</p>
      </div>
    </footer>
  );
}

