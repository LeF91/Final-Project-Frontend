import React, { useState } from "react";
import myApi from "../service/service";
import { useNavigate } from "react-router-dom";

function CreateCarPage() {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState(2022);
  const [price, setPrice] = useState("");
  const [power, setPower] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  const handleCreateCar = async (event) => {
    event.preventDefault();
    try {
      const res = await myApi.post("/cars", {
        brand,
        model,
        year,
        price,
        power,
        image,
      });
      console.log(res);
      navigate(`/cars`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleCreateCar}>
      <div>
        <label htmlFor="brand">Brand</label>
        <input
          type="text"
          id="brand"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="model">Model</label>
        <input
          type="text"
          id="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="year">Year</label>
        <input
          type="text"
          id="year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="price">Price</label>
        <input
          type="text"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="power">Power</label>
        <input
          type="text"
          id="power"
          value={power}
          onChange={(e) => setPower(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="image">image</label>
        <input
          type="url"
          id="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>
      <button onClick={handleCreateCar}>Create Car</button>
    </form>
  );
}

export default CreateCarPage;
