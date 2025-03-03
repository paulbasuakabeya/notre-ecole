// import { useState, useEffect } from "react";

// const Titre = ({ bgImage, title }) => {
//   const [colorIndex, setColorIndex] = useState(0);
//   const colors = ["text-white", "text-yellow-400", "text-blue-400", "text-red-400", "text-green-400"];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
//     }, 1000); // Change la couleur toutes les secondes

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div
//       className="relative w-full h-[300px] bg-cover bg-center bg-no-repeat flex items-center justify-center overflow-hidden"
//       style={{ backgroundImage: `url(${bgImage})` }}
//     >
//       <div className="bg-black bg-opacity-50 p-6 rounded-lg">
//         <h1 className={`text-6xl font-bold transition-colors duration-500 ${colors[colorIndex]}`}>
//           {title}
//         </h1>
//       </div>
//     </div>
//   );
// };

// export default Titre;
import { useState, useEffect } from "react";

const Titre = ({ bgImage, title }) => {
  const [colorIndex, setColorIndex] = useState(0);
  const colors = ["text-white", "text-yellow-400", "text-blue-400", "text-red-400", "text-green-400"];

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 1000); // Change la couleur toutes les secondes

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative w-full h-[300px] bg-cover bg-center bg-no-repeat flex items-center justify-center overflow-hidden"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="bg-black bg-opacity-50 p-6 rounded-lg text-center">
        <h1 className={`text-2xl md:text-6xl font-bold transition-colors duration-500 ${colors[colorIndex]}`}>
          {title}
        </h1>
      </div>
    </div>
  );
};

export default Titre;