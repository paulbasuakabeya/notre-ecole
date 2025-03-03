// import React from "react";
// import { Link } from "react-router-dom";
// import backgroundImage from '../../assets/images/Home.png';

// const Home = () => {
//   return (
//     <div
//       className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
//       style={{ backgroundImage: `url(${backgroundImage})` }}
//     >
//       <div className="flex flex-col md:flex-row md:items-end md:justify-start md:absolute md:bottom-4 md:left-4 space-y-2 md:space-y-0 md:space-x-2 md:pl-16">
//         <Link to="/login" className="px-4 py-2 bg-blue-500 text-white rounded">
//           Connexion
//         </Link>
//         <Link to="/devoir-communique" className="px-4 py-2 bg-green-500 text-white rounded mt-2 md:mt-0">
//           Activités
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Home;
import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from '../../assets/images/Home.png';

const Home = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        height: window.innerWidth < 768 ? '50vh' : '100vh',
        backgroundSize: window.innerWidth < 768 ? 'cover' : 'cover'
      }}
    >
      <div className="flex flex-col md:flex-row md:items-end md:justify-start md:absolute md:bottom-4 md:left-4 space-y-2 md:space-y-0 md:space-x-2 md:pl-16">
        <Link to="/login" className="px-4 py-2 bg-blue-500 text-white rounded">
          Connexion
        </Link>
        <Link to="/devoir-communique" className="px-4 py-2 bg-green-500 text-white rounded mt-2 md:mt-0">
          Activités
        </Link>
      </div>
    </div>
  );
};

export default Home;