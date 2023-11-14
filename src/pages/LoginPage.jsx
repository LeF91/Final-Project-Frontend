import { useRef, useState, useContext } from "react";
import myApi from "../service/service";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function LoginPage() {
  const emailInput = useRef();
  const passwordInput = useRef();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { authenticateUser } = useAuth();

  async function handleSubmit(event) {
    event.preventDefault();
    const email = emailInput.current.value;
    const password = passwordInput.current.value;
    try {
      const response = await myApi.post("/auth/login", { email, password });
      console.log("success", response);
      localStorage.setItem("authToken", response.data.token);
      await authenticateUser();
      navigate("/");
    } catch (error) {
      console.log(error.response);
      setError(error.response.data.message);
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  }
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email: </label>
        <input type="text" ref={emailInput} id="email" autoComplete="off" />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input type="password" ref={passwordInput} id="password" />
      </div>
      <button>Login</button>
      <p className="error">{error}</p>
    </form>
  );
}

export default LoginPage;
