import React, { useState, useEffect } from "react";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import FirebaseConfig from "../Firebase";

function Header() {
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState(false);
  const [userPassword, setUserPassword] = useState("");

  const CheckifUserisAuthenticated = () => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserIsLoggedIn(true);
      } else {
        setUserIsLoggedIn(false);
      }
    });
  };

  useEffect(() => {
    CheckifUserisAuthenticated();
  }, [userIsLoggedIn]);

  const handleSignOut = (e) => {
    e.preventDefault();
    const auth = getAuth(FirebaseConfig);
    signOut(auth)
      .then(() => {
        setTimeout(() => {
          alert("You are signed out. Log In to access your our website.");
        }, 2000);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    const email = prompt("Please enter your email", "");
    const password = prompt("Please enter your password");
    if (email !== null && password !== null) {
      const auth = getAuth(FirebaseConfig);
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          setUserEmail("");
          setUserPassword("");
          alert("Sign Up successful");
          setUserIsLoggedIn(true);
        })

        .catch((error) => {
          alert(error.message);
          // setIsloading(false);
        });
    } else {
      alert("Input was cancelled.");
    }
  };
  return (
    <div>
      <nav
        className="custom-navbar navbar navbar-expand-md navbar-dark bg-dark"
        aria-label="Furni navigation bar"
      >
        <div className="container">
          <a className="navbar-brand" href="/home">
            Possible Decor<span>.</span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsFurni"
            aria-controls="navbarsFurni"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsFurni">
            <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
              <li className="nav-item active">
                <a className="nav-link" href="/home">
                  Home
                </a>
              </li>
              <li>
                <a className="nav-link" href="/shop">
                  Shop
                </a>
              </li>
              <li>
                <a className="nav-link" href="/about">
                  About us
                </a>
              </li>
              <li>
                <a className="nav-link" href="/services">
                  Services
                </a>
              </li>
              <li>
                <a className="nav-link" href="/blog">
                  Blog
                </a>
              </li>
              <li>
                <a className="nav-link" href="/contact">
                  Contact us
                </a>
              </li>
            </ul>

            <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
              <li>
                <a className="nav-link" href="#">
                  <img src="../assets/images/user.svg" alt="User" />
                </a>
              </li>
              <li>
                <a className="nav-link" href="/Cart">
                  <img src="../assets/images/cart.svg" alt="Cart" />
                </a>
              </li>
            </ul>
            {userIsLoggedIn ? (
              <button className="btn btn-primary ms-3" onClick={handleSignOut}>
                <a href="/login" className="text-white text-decoration-none">
                  Sign Out
                </a>
              </button>
            ) : (
              <button className="btn btn-primary ms-3" onClick={handleSignIn}>
                <a href="/login" className="text-white text-decoration-none">
                  Login
                </a>
              </button>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
