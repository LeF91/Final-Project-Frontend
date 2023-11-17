import React, { useRef, useState } from "react";
import myApi from "../service/service";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function CreateCarPage() {
  const brandInput = useRef();
  const modelInput = useRef();
  const yearInput = useRef();
  const priceInput = useRef();
  const powerInput = useRef();
  const imageInput = useRef();

  // const [model, setModel] = useRef("");
  // const [year, setYear] = useRef("");
  // const [price, setPrice] = useRef("");
  // const [power, setPower] = useRef("");
  // const [image, setImage] = useRef("");
  const { user } = useAuth;
  const navigate = useNavigate();

  async function handleCreateCar(event) {
    event.preventDefault();
    const brand = brandInput.current.value;
    const model = modelInput.current.value;
    const year = yearInput.current.value;
    const price = price.current.value;
    const power = powerInput.current.value;
    const image = imageInput.current.value;
    try {
      const res = await myApi.post("/vehicules", {
        brand,
        model,
        year,
        price,
        power,
        image,
      });
      console.log(res);
      navigate(`/${user._id}`);
    } catch (error) {
      console.log(error);
    }
  }
  // onSubmit={handleCreateCar}
  return (
    <form>
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
