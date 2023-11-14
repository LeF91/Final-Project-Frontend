import React from "react";
import { Link } from "react-router-dom";
// import { Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import AuthMessage from "./AuthMessage";
import Logout from "./Logout";

function Navbar() {
  const [authToggle, setAuthToggle] = useState(false);
  const { isLoggedIn, user } = useAuth();

  return (
    <>
      <div className="Navbar">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/cars">All Cars</Link>
            </li>
          </ul>
        </nav>

        <nav>
          <ul>
            {isLoggedIn ? (
              <Logout />
            ) : (
              <>
                <li>
                  <button onClick={() => setAuthToggle(!authToggle)}>
                    Register
                  </button>

                  {authToggle && <AuthMessage />}
                </li>
              </>
            )}
          </ul>
        </nav>
        <nav>
          <ul>
            {isLoggedIn && user && user.role === "user" && (
              <Link to="/fav">My Favourites</Link>
            )}
          </ul>
        </nav>
      </div>

      {/* <main>
        <Outlet />
      </main> */}
    </>
  );
}

export default Navbar;
