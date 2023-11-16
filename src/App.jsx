import "./App.css";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Navbar from "./components/Navbar";
// import { CarsFilters } from "./components/CarsFilters";
import LoggedInUser from "./navigation/LoggedInUser";
import LoggedOutUser from "./navigation/LoggedOutUser";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import CarsPage from "./pages/CarsPage";
import OneCarPage from "./pages/OneCarPage";
import HomePage from "./pages/HomePage";
import EditPage from "./pages/EditPage";

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />}></Route>

          <Route element={<LoggedInUser />}>
            <Route path="/cars" element={<CarsPage />}></Route>
            <Route path="/car/:carId" element={<OneCarPage />}></Route>
            <Route path="/comments/:commentId" element={<EditPage />}></Route>
          </Route>

          <Route element={<LoggedOutUser />}>
            <Route path="/signup" element={<SignupPage />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
