import React from "react";
import { useState, useEffect } from "react";
import myApi from "../service/service";
import { useNavigate, useParams } from "react-router-dom";

function Filters() {
  const [brandFilter, setBrandFilter] = useState("");
  const [modelFilter, setModelFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const [mototrisationFilter, setMototrisationFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [allData, setAllData] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState("");
  const queryParams = new URLSearchParams();
  const navigate = useNavigate();

  const fetchAllData = async () => {
    try {
      const response = await myApi.get("/offers");
      console.log(response.data);
      setAllData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  if (!allData) {
    return <p>Loading...</p>;
  }
}
