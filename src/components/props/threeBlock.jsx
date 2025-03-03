import React from 'react';
import Carousel from './carousel';
import CarouselDeux from './carouselDeux';

const ThreeBlockLayout = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:justify-between w-full px-4 py-8 lg:py-16">
      {/* Bloc gauche */}
      <div className="hidden lg:block w-1/3">
        <Carousel />
      </div>

      {/* Bloc central */}
      <div className="w-full lg:w-1/3 text-center lg:px-8">
        <h1 className="text-2xl lg:text-4xl font-bold text-gray-800 mb-4">Pour Notre Ecole</h1>
        <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
        Nous nous engageons à offrir une éducation accessible et de qualité, adaptée aux besoins de chaque élève.  
  Grâce à notre approche bienveillante et inclusive, nous accompagnons les jeunes dans leur apprentissage,  
  en leur fournissant les outils nécessaires pour bâtir un avenir solide.  
  Notre mission est d’encourager le développement personnel et académique, tout en inculquant des valeurs  
  de solidarité, d’entraide et de responsabilité citoyenne. Ensemble, construisons un monde meilleur  
  grâce à l’éducation.
        </p>
      </div>

      {/* Bloc droit */}
      <div className="w-full lg:w-1/3">
        <CarouselDeux />
      </div>
    </div>
  );
};

export default ThreeBlockLayout;
