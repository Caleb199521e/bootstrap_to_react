import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import FirebaseConfig from "../Firebase";

function Login() {
  const [isLoginActive, setIsLoginActive] = useState(true);
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const navigate = useNavigate();

  const handleSwitchToSignup = (e) => {
    e.preventDefault();
    setIsLoginActive(false);
  };

  const handleSwitchToLogin = (e) => {
    e.preventDefault();
    setIsLoginActive(true);
  };

  const handleGoogleLogin = (e) => {
    e.preventDefault();
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(() => {
        alert("You are logged in. Welcome back!");
        navigate("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const handleFacebookLogin = (e) => {
    e.preventDefault();
    // Implement Facebook login here
    console.log("Facebook login clicked");
  };

  const onSignup = (e) => {
    e.preventDefault();
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, userEmail, userPassword)
      .then(() => {
        setUserEmail("");
        setUserPassword("");
        alert("Sign up successful");
        navigate("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const onLogin = (e) => {
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, userEmail, userPassword)
      .then(() => {
        alert("Welcome back!");
        setUserEmail("");
        setUserPassword("");
        navigate("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login-page">
      <div className="wrapper">
        {isLoginActive ? (
          <form id="login-form" className="active-form" onSubmit={onLogin}>
            <h1>Login</h1>
            <div className="input-box">
              <input
                type="email"
                id="login-email"
                placeholder="Email"
                required
                value={userEmail}
                onChange={(event) => setUserEmail(event.target.value)}
              />
              <i className="bx bx-user"></i>
            </div>
            <div className="input-box">
              <input
                type="password"
                id="login-password"
                placeholder="Password"
                required
                value={userPassword}
                onChange={(event) => setUserPassword(event.target.value)}
              />
              <i className="bx bx-lock-alt"></i>
            </div>
            <div className="remember-forgot">
              <a href="#">Forgot password?</a>
            </div>
            <button type="submit" className="btn-login">
              Login
            </button>
            <div className="social-login">
              <button onClick={handleGoogleLogin} className="btn-google">
                <i className="bx bxl-google"></i> Sign in with Google
              </button>
              <button onClick={handleFacebookLogin} className="btn-facebook">
                <i className="bx bxl-facebook"></i> Sign in with Facebook
              </button>
            </div>
            <div className="register-link">
              <p>
                Don't have an account?{" "}
                <a
                  href="#"
                  onClick={handleSwitchToSignup}
                  className="form-switch-link"
                >
                  Register
                </a>
              </p>
            </div>
          </form>
        ) : (
          <form id="signup-form" className="active-form" onSubmit={onSignup}>
            <h1>Sign Up</h1>
            <div className="input-box">
              <input
                type="text"
                id="signup-username"
                placeholder="Username"
                required
              />
              <i className="bx bx-user"></i>
            </div>
            <div className="input-box">
              <input
                type="email"
                id="signup-email"
                placeholder="Email"
                required
                value={userEmail}
                onChange={(event) => setUserEmail(event.target.value)}
              />
              <i className="bx bx-envelope"></i>
            </div>
            <div className="input-box">
              <input
                type="password"
                id="signup-password"
                placeholder="Password"
                required
                value={userPassword}
                onChange={(event) => setUserPassword(event.target.value)}
              />
              <i className="bx bx-lock-alt"></i>
            </div>
            <button type="submit" className="btn-login">
              Sign Up
            </button>
            <div className="social-login">
              <button onClick={handleGoogleLogin} className="btn-google">
                <i className="bx bxl-google"></i> Sign up with Google
              </button>
              <button onClick={handleFacebookLogin} className="btn-facebook">
                <i className="bx bxl-facebook"></i> Sign up with Facebook
              </button>
            </div>
            <div className="register-link">
              <p>
                Already have an account?{" "}
                <a
                  href="#"
                  onClick={handleSwitchToLogin}
                  className="form-switch-link"
                >
                  Login
                </a>
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default Login;
