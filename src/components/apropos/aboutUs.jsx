import bgImage from "../../assets/images/eleve-resumé.jpg"; // Chemin vers ton image

const AboutUs = () => {
  return (
    <div 
      className="relative w-full h-[300px] bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="bg-black bg-opacity-50 p-6 rounded-lg">
        <h1 className="text-6xl font-bold">À propos de nous</h1>
      </div>
    </div>
  );
};

export default AboutUs;
