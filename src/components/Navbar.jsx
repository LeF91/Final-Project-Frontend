import React from "react";
import { Outlet } from "react-router-dom";

function Navbar() {
  return (
    <>
      <h1>Logo</h1>

      <Outlet />
    </>
  );
}
