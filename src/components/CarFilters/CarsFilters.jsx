import React, { useState, useEffect } from "react";
// import myApi from "../../service/service.js";

function CarFilter({ onFilter }) {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [energy, setenergy] = useState("");
  const [price, setPrice] = useState("");
  const [power, setPower] = useState("");
  const [category, setCategory] = useState("");

  const handleFilter = () => {
    onFilter(brand, model, energy, price, power, category);
  };

  return (
    <div className="filter">
      <h2>Filtrer les Voitures</h2>
      <form onClick={handleFilter}>
        <div className="filter">
          <label>
            Marque:
            <input
              className="inputFilter"
              type="text"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            />
          </label>
          <label>
            Modèle:
            <input
              className="inputFilter"
              type="text"
              value={model}
              onChange={(e) => setModel(e.target.value)}
            />
          </label>
          <label>
            Type de Carburant:
            <input
              className="inputFilter"
              type="text"
              value={energy}
              onChange={(e) => setenergy(e.target.value)}
            />
          </label>
          <label>
            Category:
            <input
              className="inputFilter"
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </label>
          <label>
            Prix maximum:
            <input
              className="inputFilter"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          <label>
            Puissance minimale:
            <input
              className="inputFilter"
              type="number"
              value={power}
              onChange={(e) => setPower(e.target.value)}
            />
          </label>
          <button type="button">Filtrer</button>
        </div>
      </form>
    </div>
  );
}

export default CarFilter;
