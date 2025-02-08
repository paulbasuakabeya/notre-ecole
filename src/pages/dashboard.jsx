
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const Dashboard = () => {
//   const [things, setThings] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:3000/api/stuff")
//       .then((response) => {
//         setThings(response.data);
//       })
//       .catch((error) => console.error("Erreur lors du chargement", error));
//   }, []);

//   return (
//     <div>
//       <h1 className="text-2xl font-bold">Liste des objets</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {things.map((thing) => (
//           <div key={thing._id} className="border p-4 rounded shadow">
//             <img src={thing.imageUrl} alt={thing.title} className="w-full h-48 object-cover rounded" />
//             <h2 className="text-xl font-bold">{thing.title}</h2>
//             <p>{thing.description}</p>
//             <p className="text-lg font-semibold">{thing.price} €</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;



import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {

  // const navigate = useNavigate();
  // const [role, setRole] = useState("");

  // useEffect(() => {
  //   setRole(localStorage.getItem("role"));
  // }, []);

  const [things, setThings] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchThings = async () => {
      try {
        const response = await axios.get("https://backende-murex.vercel.app/api/stuff", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setThings(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des objets", error);
      }
    };

    fetchThings();
  }, [token]);

  // Fonction de suppression http://localhost:3000/api/stuff/${id}
  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://backende-murex.vercel.app/api/stuff/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setThings(things.filter((thing) => thing._id !== id));
    } catch (error) {
      console.error("Erreur lors de la suppression", error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Liste des objets</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {things.map((thing) => (
          <div key={thing._id} className="bg-white p-4 rounded shadow">
            <img
              src={thing.imageUrl}
              alt={thing.title}
              className="w-full h-40 object-cover rounded"
            />
            <h2 className="text-xl font-bold">{thing.title}</h2>
            <p>{thing.description}</p>
            <p className="font-semibold text-green-600">{thing.price} $</p>
            
            <Link
              to={`/edit-thing/${thing._id}`}
              className="btn bg-yellow-500 text-white p-2 rounded"
            >
              Modifier
            </Link>

            {/* Bouton de suppression pour chaque objet */}
            <button
              onClick={() => handleDelete(thing._id)}
              className="btn bg-red-500 text-white p-2 rounded"
            >
              Supprimer
            </button>
          </div>
        ))}
      </div>
      
      <Link
        to="/add-thing"
        className="btn bg-blue-500 text-white p-2 rounded mt-4 inline-block"
      >
        Ajouter un objet
      </Link>
      {/* {role === "admin" && (
        <button onClick={() => navigate("/create")} className="btn bg-blue-500 text-white p-2 rounded">
          Ajouter un objet
        </button>
      )} */}
      
    </div>
  );
};

export default Dashboard;
