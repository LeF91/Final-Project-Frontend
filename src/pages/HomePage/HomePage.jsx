import React from "react";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
  const { isLoggedIn } = useAuth();

  // if (!isLoggedIn) {
  //   return (
  //     <p className="form">
  //       Please <Link to="/login">Log in</Link>
  //     </p>
  //   );
  // }
  return (
    <div className="homepage">
      <h1>Driv'ce</h1>
      <p>
        Welcome to Driv'ce, where every comment matters. Share your experiences
        with the cars you've driven, whether it's a rave review or a cautionary
        tale. Together, let's build a community committed to guiding future
        drivers in their choices, turning each comment into a valuable roadmap
        for their upcoming journeys on the road. Join us, contribute, and shape
        the future of every automotive adventure.
      </p>
    </div>
  );
}

export default HomePage;
