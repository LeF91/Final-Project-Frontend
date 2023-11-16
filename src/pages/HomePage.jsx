import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function HomePage() {
  const { isLoggedIn } = useAuth();

  // if (!isLoggedIn) {
  //   return (
  //     <p className="form">
  //       Please <Link to="/login">Log in</Link>
  //     </p>
  //   );
  // }
  return <div>HomePage</div>;
}

export default HomePage;
