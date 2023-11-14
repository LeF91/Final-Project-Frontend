import React, { useState, useEffect } from "react";
import CarFilter from "../components/CarsFilters.jsx";
import myApi from "./../service/service.js";

function CarsPage() {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);

  useEffect(() => {
    async function fetchCars() {
      try {
        const res = await myApi.get("/vehicule");
        setCars(res.data);
        setFilteredCars(res.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchCars();
  }, []);

  const handleFilter = (brand, model, energy, price, power) => {
    let filtered = [...cars];

    if (brand) {
      filtered = filtered.filter((car) => car.brand === brand);
    }

    if (model) {
      filtered = filtered.filter((car) => car.model === model);
    }

    if (energy) {
      filtered = filtered.filter((car) => car.energy === energy);
    }

    if (price) {
      filtered = filtered.filter((car) => car.price <= parseInt(price));
    }

    if (power) {
      filtered = filtered.filter((car) => car.power >= parseInt(power));
    }

    setFilteredCars(filtered);
  };

  return (
    <div>
      <h1>Liste des Voitures Disponibles</h1>
      <CarFilter onFilter={handleFilter} />

      <ul>
        {filteredCars.map((car) => (
          <li key={car.id}>
            <strong>
              {car.brand} {car.model}
            </strong>{" "}
            ({car.energy}) - {car.price} € - {car.power} CV
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CarsPage;
