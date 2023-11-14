import "./App.css";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Navbar from "./components/Navbar";
// import { CarsFilters } from "./components/CarsFilters";
import Login from "./components/Login";
import Signup from "./components/Signup";
import CarsPage from "./pages/CarsPage";
import OneCarPage from "./pages/OneCarPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route element={<Navbar />}>
            <Route path="/" element={<HomePage />}>
              Home Page
            </Route>
            <Route path="/cars" element={<CarsPage />}>
              All Cars
            </Route>
            <Route path="/car/:carId" element={<OneCarPage />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/login" element={<Login />}></Route>
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
