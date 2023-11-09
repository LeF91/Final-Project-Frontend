import "./App.css";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { HomePage } from "./pages/HomePage";
import { ErrorPage } from "./pages/ErrorPage";
import { LoginPage } from "./components/Login";
import { SignupPage } from "./components/SignhUp";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route element={<Navbar />}>
            <Route path="/" element={<HomePage />}>
              Home Page
            </Route>
            <Route path="/vehicule">All vehicules</Route>
            <Route path="*" element={<ErrorPage />}></Route>
            <Route path="/signup" element={<SignupPage />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
