import React, { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../Firebase"; // Import auth from Firebase
import { useCart } from '../Context/CartContext'; // Import CartContext
import { useLocation, Link } from "react-router-dom";

function Header() {
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const { getCartItemCount } = useCart(); // Get cart item count
  const cartItems = getCartItemCount(); // Get the count of items in the cart
  const location = useLocation(); // Get current location for active link

  useEffect(() => {
    const CheckifUserisAuthenticated = () => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUserIsLoggedIn(true);
        } else {
          setUserIsLoggedIn(false);
        }
      });
    };

    CheckifUserisAuthenticated();
  }, [userIsLoggedIn]);

  const handleSignOut = (e) => {
    e.preventDefault();
    signOut(auth)
      .then(() => {
        alert("You are signed out. Log In to access our website.");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    const email = prompt("Please enter your email", "");
    const password = prompt("Please enter your password");
    if (email && password) {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          setUserEmail("");
          setUserPassword("");
          alert("Sign In successful");
          setUserIsLoggedIn(true);
        })
        .catch((error) => {
          alert(error.message);
        });
    } else {
      alert("Input was cancelled.");
    }
  };

  return (
    <div>
      <nav className="custom-navbar navbar navbar-expand-md navbar-dark bg-dark" aria-label="Furni navigation bar">
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
              <li className={`nav-item ${location.pathname === "/home" ? "active" : ""}`}>
                <Link className="nav-link" to="/home">Home</Link>
              </li>
              <li className={`nav-item ${location.pathname === "/shop" ? "active" : ""}`}>
                <Link className="nav-link" to="/shop">Shop</Link>
              </li>
              <li className={`nav-item ${location.pathname === "/about" ? "active" : ""}`}>
                <Link className="nav-link" to="/about">About us</Link>
              </li>
              <li className={`nav-item ${location.pathname === "/services" ? "active" : ""}`}>
                <Link className="nav-link" to="/services">Services</Link>
              </li>
              <li className={`nav-item ${location.pathname === "/blog" ? "active" : ""}`}>
                <Link className="nav-link" to="/blog">Blog</Link>
              </li>
              <li className={`nav-item ${location.pathname === "/contact" ? "active" : ""}`}>
                <Link className="nav-link" to="/contact">Contact us</Link>
              </li>
            </ul>

            <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
              <li>
                <a className="nav-link" href="#">
                  <img src="../assets/images/user.svg" alt="User" />
                </a>
              </li>
              <li>
                <a className="nav-link" href="/cart">
                  <img src="../assets/images/cart.svg" alt="Cart" />
                  {cartItems > 0 && (
                    <span className="cart-counter">{cartItems}</span> // Display counter
                  )}
                </a>
              </li>
            </ul>

            {userIsLoggedIn ? (
              <button className="btn btn-primary ms-3" onClick={handleSignOut}>
                <a href="/login" className="text-white text-decoration-none">Sign Out</a>
              </button>
            ) : (
              <button className="btn btn-primary ms-3" onClick={handleSignIn}>
                <a href="/login" className="text-white text-decoration-none">Login</a>
              </button>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
