import { useRef, useState } from "react";
import myApi from "../service/service";
import { useNavigate } from "react-router-dom";

function SignupPage() {
  const usernameInput = useRef();
  const passwordInput = useRef();
  const emailInput = useRef();
  const departementInput = useRef();

  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    const username = usernameInput.current.value;
    const password = passwordInput.current.value;
    const email = emailInput.current.value;
    const departement = departementInput.current.value;

    try {
      const response = await myApi.signup({
        username,
        password,
        email,

        departement,
      });
      console.log("success", response);
    } catch (error) {
      console.log(error);
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email: </label>
        <input type="text" ref={emailInput} id="email" />
      </div>
      <div>
        <label htmlFor="username">Username: </label>
        <input type="text" ref={usernameInput} id="username" />
      </div>
      <div>
        <label htmlFor="departement">departement: </label>
        <input type="number" ref={departementInput} id="departement" />
      </div>

      <div>
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          required
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
          title="Password must have at least 6 characters and contain at least one number, one lowercase and one uppercase letter."
          ref={passwordInput}
          id="password"
        />
      </div>

      <button>Signup</button>
      <p className="error">{error}</p>
    </form>
  );
}

export default Signup;
