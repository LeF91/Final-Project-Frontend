import React, { useRef, useState } from "react";
import myApi from "../service/service";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function CreateCarPage() {
  const [car, setCar] = useState({
    image: "",
    brand: "",
    model: [
      {
        name: "",
        year: "",
      },
    ],
    motorisation: [
      {
        name: "",
        energy: "",
        power: "",
      },
    ],

    price: 0,
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setCar({
      ...car,
      [name]: value,
    });
  };
  // const [brand, setBrand] = useState("");
  // const [model, setModel] = useState("");
  // const [year, setYear] = useState("");
  // const [price, setPrice] = useState("");
  // const [energy, setEnergy] = useState("");
  // const [power, setPower] = useState("");
  // const [image, setImage] = useState("");
  // const { user } = useAuth();
  // const navigate = useNavigate();

  // async function handleCreateCar(event) {
  //   event.preventDefault();
  //   const brand = brandInput.current.value;
  //   const model = modelInput.current.value;
  //   const year = yearInput.current.value;
  //   const price = priceInput.current.value;
  //   const energy = energyInput.current.value;
  //   const power = powerInput.current.value;
  //   const image = imageInput.current.value;
  //   try {
  //     const res = await myApi.post("/vehicule/create", {
  //       brand,
  //       model,
  //       year,
  //       price,
  //       energy,
  //       power,
  //       image,
  //     });
  //     console.log(res);
  //     navigate(`/${user._id}`);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  const handleCreateCar = async (event) => {
    event.preventDefault();
    try {
      // Assure-toi de mettre le bon endpoint pour créer une voiture
      const response = await myApi.post("/vehicule/create", car);
      console.log("Car added successfully:", response.data);
      setCar({
        brand: "",
        model: [
          {
            name: "",
            year: "",
            productionStop: "",
          },
        ],
        motorisation: [
          {
            name: "",
            energy: "",
            power: "",
          },
        ],
        price: 0,
        image: "",
      });
    } catch (error) {
      console.log("Error adding car:", error);
    }
  };
  // const handleCreateCar = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const res = await myApi.post("/vehicule/create", {
  //       brand,
  //       model,
  //       year,
  //       price,
  //       energy,
  //       power,
  //       image,
  //     });
  //     navigate(`/${user._id}`);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // onSubmit={handleCreateCar}
  return (
    <div className="createDiv">
      <h2>Add New Car</h2>
      <form onSubmit={handleCreateCar}>
        <div className="createDiv">
          <label htmlFor="brand">Brand</label>
          <br />
          <input
            className="inputCreate"
            required
            type="text"
            name="brand"
            value={car.brand}
            onChange={handleChange}
          />
        </div>

        <div className="createDiv">
          <label htmlFor="modelName">Name</label>
          <br />
          <input
            className="inputCreate"
            required
            type="text"
            name="model.name"
            value={car.model.name}
            onChange={handleChange}
          />
        </div>

        <div className="createDiv">
          <label htmlFor="modelYear">Year</label>
          <br />
          <input
            className="inputCreate"
            required
            type="text"
            name="model.year"
            value={car.model.year}
            onChange={handleChange}
          />
        </div>

        {/* <div className="createDiv">
          <label htmlFor="modelProductionStop">Model Production Stop</label>
          <br />
          <input
            className="inputCreate"
            type="text"
            name="model.productionStop"
            value={car.model.productionStop}
            onChange={handleChange}
          />
        </div> */}

        <div className="createDiv">
          <label htmlFor="motorisationName">Motorisation</label>
          <br />
          <input
            className="inputCreate"
            type="text"
            name="motorisation.name"
            value={car.motorisation.name}
            onChange={handleChange}
          />
        </div>

        <div className="createDiv">
          <label htmlFor="motorisationEnergy">Energy</label>
          <br />
          <input
            className="inputCreate"
            required
            type="text"
            name="motorisation.energy"
            value={car.motorisation.energy}
            onChange={handleChange}
          />
        </div>

        <div className="createDiv">
          <label htmlFor="motorisationPower">Power</label>
          <br />
          <input
            className="inputCreate"
            required
            type="text"
            name="motorisation.power"
            value={car.motorisation.power}
            onChange={handleChange}
          />
        </div>

        {/* <div className="createDiv">
          <label htmlFor="category">Category</label>
          <br />
          <input
            className="inputCreate"
            type="text"
            name="category"
            value={car.category}
            onChange={handleChange}
          />
        </div> */}

        <div className="createDiv">
          <label htmlFor="price">Price</label>
          <br />
          <input
            className="inputCreate"
            required
            type="number"
            name="price"
            value={car.price}
            onChange={handleChange}
          />
        </div>
        <div className="createDiv">
          <label htmlFor="image">Image</label>
          <br />
          <input
            className="inputCreate"
            required
            type="text"
            name="image"
            value={car.image}
            onChange={handleChange}
          />
        </div>

        <div className="createDiv">
          <button type="submit">Add Car</button>
        </div>
      </form>
    </div>
  );
}

export default CreateCarPage;
//   return (
//     <form onSubmit={handleCreateCar}>
//       <div>
//         <label htmlFor="brand">Brand</label>
//         <input
//           type="text"
//           id="brand"
//           // ref={brandInput}
//           value={brand}
//           onChange={(e) => setBrand(e.target.value)}
//         />
//       </div>
//       <div>
//         <label htmlFor="model">Model</label>
//         <input
//           type="text"
//           id="model"
//           value={model.name}
//           onChange={(e) => setModel(e.target.value)}
//         />
//       </div>
//       <div>
//         <label htmlFor="year">Year</label>
//         <input
//           type="text"
//           id="year"
//           value={year}
//           onChange={(e) => setYear(e.target.value)}
//         />
//       </div>
//       <div>
//         <label htmlFor="price">Price</label>
//         <input
//           type="text"
//           id="price"
//           value={price}
//           onChange={(e) => setPrice(e.target.value)}
//         />
//       </div>
//       <div>
//         <label htmlFor="power">Power</label>
//         <input
//           type="text"
//           id="power"
//           value={power}
//           onChange={(e) => setPower(e.target.value)}
//         />
//       </div>
//       <div>
//         <label htmlFor="energy">Energy</label>
//         <input
//           type="text"
//           id="energy"
//           onChange={(e) => setEnergy(e.target.value)}
//         />
//       </div>
//       <div>
//         <label htmlFor="image">image</label>
//         <input
//           type="url"
//           id="image"
//           value={image}
//           onChange={(e) => setImage(e.target.value)}
//         />
//       </div>
//       <button onClick={handleCreateCar}>Create Car</button>
//     </form>
//   );
// }

// export default CreateCarPage;
