import React from "react";
import { Outlet } from "react-router-dom";
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
              <NavLink to="/">Home</NavLink>
            </li>

            <li>
              <NavLink to="/about">About</NavLink>
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
                    toggle Auth
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
              <NavLink to="/fav">My Favourites</NavLink>
            )}
          </ul>
        </nav>
      </div>

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Navbar;
