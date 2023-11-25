import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./Navbar.css";

function Navbar() {
  // const [authToggle, setAuthToggle] = useState(false);
  const { isLoggedIn, authenticateUser, isAdmin } = useAuth();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    authenticateUser();
  };

  return (
    <div className="Navbar">
      <nav>
        <ul>
          <p>
            <Link to="/">Home</Link>
          </p>

          <p>
            <Link to="/vehicules">All Cars</Link>
          </p>
          <p>
            <Link to="/"></Link>
          </p>
          <p>
            <Link to="/create">Create New Car</Link>
          </p>
        </ul>
      </nav>
      <nav>
        <ul>
          {isLoggedIn ? (
            <p>
              <button onClick={handleLogout}>Logout</button>
            </p>
          ) : (
            <>
              <p>
                <Link to="/login">Login</Link>
              </p>
              <p>
                <Link to="/signup">Signup</Link>
              </p>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
