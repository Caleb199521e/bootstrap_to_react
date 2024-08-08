import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
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
    console.log("Google login clicked");
  };

  const handleFacebookLogin = (e) => {
    e.preventDefault();
    console.log("Facebook login clicked");
  };

  const onSignupCliecked = (e) => {
    e.preventDefault();
    const auth = getAuth(FirebaseConfig);
    signInWithEmailAndPassword(auth, userEmail, userPassword)
      .then(() => {
        setUserEmail("");
        setUserPassword("");
        alert("Sign Up successful");
        navigate("/");
      })

      .catch((error) => {
        alert(error.message);
        // setIsloading(false);
      });
  };

  const onLogin = (e) => {
    e.preventDefault();
    const auth = getAuth(FirebaseConfig);
    createUserWithEmailAndPassword(auth, userEmail, userPassword)
      .then(() => {
        alert("Welcome back");
        setUserEmail("");
        setUserPassword("");
      })

      .catch((error) => {
        alert(error.message);
        // setIsloading(false);
      });
  };

  const SignUpWithGmail = (event) => {
    event.preventDefault();
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(() => {
        setTimeout(() => {
          alert("You are logged In. Welcome back");
        }, 2000);
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
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
                type="text"
                id="login-username"
                placeholder="Username"
                required
              />
              <i className="bx bx-user"></i>
            </div>
            <div className="input-box">
              <input
                type="password"
                id="login-password"
                placeholder="Password"
                required
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
              <button onClick={SignUpWithGmail} className="btn-google">
                <i className="bx bxl-google"></i> Sign in with Google
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
          <form
            id="signup-form"
            className="active-form"
            onSubmit={onSignupCliecked}
          >
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
              <button onClick={SignUpWithGmail} className="btn-google">
                <i className="bxl-google"></i> Sign up with Google
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
