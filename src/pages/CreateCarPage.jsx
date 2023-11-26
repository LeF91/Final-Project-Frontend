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
