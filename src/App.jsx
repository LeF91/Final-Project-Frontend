import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
// import { CarsFilters } from "./components/CarsFilters";
import LoggedInUser from "./navigation/LoggedInUser";
import LoggedOutUser from "./navigation/LoggedOutUser";
import AdminRoute from "./navigation/Admin";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import CarsPage from "./pages/CarsPage/CarsPage";
import OneCarPage from "./pages/OneCarPage/OneCarPage";
import HomePage from "./pages/HomePage/HomePage";
// import EditPage from "./pages/EditPage";

import CreateCarPage from "./pages/CreateCarPage";
function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />}></Route>

          <Route element={<LoggedInUser />}>
            <Route path="/vehicules" element={<CarsPage />}></Route>
            <Route
              path="/vehicule/:vehiculeId"
              element={<OneCarPage />}
            ></Route>
            {/* <Route
              path="/comments/:commentId/edit"
              element={<EditPage />}
            ></Route> */}
          </Route>

          <Route element={<AdminRoute />}>
            <Route path="/create" element={<CreateCarPage />}></Route>
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
