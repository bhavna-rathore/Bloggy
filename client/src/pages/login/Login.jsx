import { Context } from "../../context/Context";
import axios from "axios";
import { useContext, useRef } from "react";
import { Link } from "react-router-dom"
import "./login.css"

export default function Login() {

  const userRef = useRef();
  const passwordRef = useRef();
  const {dispatch, isFetching } = useContext(Context);

const handleSubmit = async (e) => {
  e.preventDefault();
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axios.post("/auth/login", {
      username: userRef.current.value,
      password: passwordRef.current.value,
    });
    // Save JWT to localStorage
    if (res.data.token) {
      localStorage.setItem("jwtToken", res.data.token);
    }
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
  } catch (err) {
    alert("Login failed. Please check your username and password.");
    dispatch({ type: "LOGIN_FAILURE" });
  }
};

const handleGuestLogin = async () => {
  // Set input values
  if (userRef.current && passwordRef.current) {
    userRef.current.value = "123456";
    passwordRef.current.value = "123456";
  }

  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axios.post("/auth/login", {
      username: "123456",
      password: "123456",
    });
    // Save JWT to localStorage
    if (res.data.token) {
      localStorage.setItem("jwtToken", res.data.token);
    }
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
  } catch (err) {
    alert("Guest login failed.");
    dispatch({ type: "LOGIN_FAILURE" });
  }
};
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter your username..."
          ref={userRef}
        />
        <label>Password</label>
        <input
          type="password"
          className="loginInput"
          placeholder="Enter your password..."
          ref={passwordRef}
        />
        <button className="loginButton" type="submit" disabled={isFetching}>
          Login
        </button>
        
      <button className="loginGuestButton" onClick={handleGuestLogin} disabled={isFetching}>
        Login as Guest
      </button>
      </form>

      <button className="loginRegisterButton">
        <Link className="link" to="/register">Register</Link>
      </button>

    </div>
  );
}

