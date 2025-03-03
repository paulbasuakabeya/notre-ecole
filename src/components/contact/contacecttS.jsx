import React from 'react';

const ContactSection = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-start gap-8 p-4 lg:p-8 bg-gray-100 overflow-hidden w-full">
      {/* Bloc de gauche */}
      <div className="lg:w-1/2 w-full px-2">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Entrer en contact</h1>
        <p className="mb-4 text-gray-700 text-sm md:text-base">
          Contactez-nous dès aujourd’hui pour en savoir plus sur notre établissement et nos programmes éducatifs.  
          Nous sommes à votre disposition pour répondre à toutes vos questions et vous accompagner dans l'inscription  
          de votre enfant. Rejoignez-nous et offrons ensemble un avenir prometteur à nos élèves !  

        </p>
        <div className="w-full h-[1px] bg-black mb-4"></div>
        <div className="mb-4 text-gray-800 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-12">
          <div>
            <p><strong>Téléphone:</strong></p>
            <p>(+243) 820-000-00</p>
          </div>
          <div>
            <p><strong>E-mail:</strong></p>
            <p>notreecocole@gmail.com</p>
          </div>
        </div>
        <div className="w-full h-[1px] bg-black mb-4"></div>
        <div className="mb-4 text-gray-800">
          <p><strong>Adresse:</strong></p>
          <p>2972, chemin Westheimer. Santa Ana, Illinois 85486</p>
        </div>
        <div className="w-full h-[1px] bg-black mb-4"></div>

        <div className="flex items-center gap-4">
          <p className="font-semibold">Suivez-nous:</p>
          <div className="flex gap-3">
            <a href="#" className="text-blue-600 text-lg"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text-blue-400 text-lg"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-green-500 text-lg"><i className="fab fa-whatsapp"></i></a>
            <a href="#" className="text-pink-500 text-lg"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>

      {/* Bloc de droite : Formulaire */}
      <div className="lg:w-1/2 w-full px-2">
        <form className="w-full max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
              Nom
            </label>
            <input
              type="text"
              id="name"
              placeholder="Entrez votre nom"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              placeholder="Entrez votre e-mail"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              placeholder="Écrivez votre message ici"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-md font-semibold hover:bg-blue-600 transition duration-300"
          >
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
