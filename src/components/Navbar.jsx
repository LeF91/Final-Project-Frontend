import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import AuthMessage from "./AuthMessage";
// import LoginPage from "../pages/LoginPage";
// import Logout from "./Logout";

function Navbar() {
  // const [authToggle, setAuthToggle] = useState(false);
  const { isLoggedIn, authenticateUser, user } = useAuth();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    authenticateUser();
  };

  return (
    <div className="Navbar">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/cars">All Cars</Link>
          </li>
          <li>
            <Link to="/"></Link>
          </li>
        </ul>
      </nav>
      <nav>
        <ul>
          {isLoggedIn ? (
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          ) : (
            <>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
              <li>
                <NavLink to="/signup">Signup</NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
