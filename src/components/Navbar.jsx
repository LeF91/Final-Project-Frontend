import React from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import AuthMessage from "./AuthMessage";

function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className="Navbar">
        <h1>Navbar</h1>
      </div>
      <button onClick={() => setToggle(!toggle)}>toggle Auth</button>

      {toggle && <AuthDialog />}

      <main>
        <Outlet />
      </main>
    </>
  );
}
