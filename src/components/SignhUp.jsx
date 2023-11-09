import { useRef, useState } from "react";
import myApi from "./../service/service";
import { useNavigate } from "react-router-dom";

function SignupPage() {
  const usernameInput = useRef();
  const passwordInput = useRef();
  const emailInput = useRef();
  //   const userRoleInput = useRef();
  const adressInput = useRef();

  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    const username = usernameInput.current.value;
    const password = passwordInput.current.value;
    const email = emailInput.current.value;
    // const userRole = userRoleInput.current.value; to add also to the async function in the req body!!!!
    const adress = adressInput.current.value;

    try {
      const response = await myApi.signup({
        username,
        password,
        email,

        adress,
      });
      console.log("success", response);
      //   change for a toggle!!! singUp - logIn//
      //   navigate("/login");
    } catch (error) {
      console.log(error);
      //   setError(error.response.data.message);
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email: </label>
        <input type="text" ref={emailInput} id="email" autoComplete="off" />
      </div>
      <div>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          ref={usernameInput}
          id="username"
          autoComplete="off"
        />
      </div>
      <div>
        <label htmlFor="adress">adress: </label>
        <input type="number" ref={adressInput} id="adress" autoComplete="off" />
      </div>

      <div>
        <label htmlFor="password">Password: </label>
        <input type="password" ref={passwordInput} id="password" />
      </div>

      <button>Signup</button>
      <p className="error">{error}</p>
    </form>
  );
}

export default SignupPage;
