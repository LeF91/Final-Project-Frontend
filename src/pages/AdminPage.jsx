// import React, { useState } from "react";
// import myApi from "./../service/service.js";

// function AdminPage() {
//   const [brand, setBrand] = useState("");
//   const [model, setModel] = useState("");
//   const [year, setYear] = useState("");

//   const handleCreateCar = async () => {
//     try {
//       await myApi.post("/cars", { brand, model, year });
//       // Ajoutez ici la redirection ou d'autres actions après la création de la voiture
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div>
//       <h1>Création de Voiture</h1>
//       <label>Marque:</label>
//       <input
//         type="text"
//         value={brand}
//         onChange={(e) => setBrand(e.target.value)}
//       />
//       <label>Modèle:</label>
//       <input
//         type="text"
//         value={model}
//         onChange={(e) => setModel(e.target.value)}
//       />
//       <label>Année:</label>
//       <input
//         type="text"
//         value={year}
//         onChange={(e) => setYear(e.target.value)}
//       />
//       <button onClick={handleCreateCar}>Créer la Voiture</button>
//     </div>
//   );
// }

// export default AdminPage;
