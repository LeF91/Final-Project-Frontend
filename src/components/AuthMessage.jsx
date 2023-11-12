import React, { useState } from "react";
import Login from "./Login";
import Signup from "./SignUp";

function AuthMessage() {
  const [isFlipped, setFlipped] = useState(false);

  const flipModal = () => {
    setFlipped(!isFlipped);
  };

  return (
    <>
      <div className={`flip-modal ${isFlipped ? "flipped" : ""}`}>
        <div className="flip-modal-inner">
          <div className="flip-modal-front">
            <Login />
            Don't have the account yet ?
            <button onClick={flipModal}>Sign up! </button>
          </div>

          <div className="flip-modal-back">
            <Signup />
            Already have an account ?
            <button onClick={flipModal}>Log In !</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AuthMessage;
