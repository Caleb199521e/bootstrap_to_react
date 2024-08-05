import React from 'react'

function header() {
  return (
    <div> {/* Navigation Bar */}
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
              <a className="nav-link" href="cart.html">
                <img src="../assets/images/cart.svg" alt="Cart" />
              </a>
            </li>
          </ul>
          <button className="btn btn-primary ms-3">
            <a href="login.html" className="text-white text-decoration-none">
              Login
            </a>
          </button>
        </div>
      </div>
    </nav>
    
    
    </div>
  )
}

export default header