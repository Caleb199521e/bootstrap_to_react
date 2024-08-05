import React from 'react'

function login() {
  return (
    <div>
      <body className="login-page">
  <div className="wrapper">
    {/* Login Form */}
    <form id="login-form" className="active-form">
      <h1>Login</h1>
      <div className="input-box">
        <input
          type="text"
          id="login-username"
          placeholder="Username"
          required
        />
        <i className='bx bx-user'></i>
      </div>
      <div className="input-box">
        <input
          type="password"
          id="login-password"
          placeholder="Password"
          required
        />
        <i className='bx bx-lock-alt'></i>
      </div>
      <div className="remember-forgot">
        <label>
          <input type="checkbox" /> Remember me
        </label>
        <a href="#">Forgot password?</a>
      </div>
      <button type="submit" className="btn-login">
        Login
      </button>
      <div className="register-link">
        <p>
          Don't have an account? <a href="#" id="show-signup">Register</a>
        </p>
      </div>
    </form>
    {/* Signup Form */}
    <form id="signup-form">
      <h1>Sign Up</h1>
      <div className="input-box">
        <input
          type="text"
          id="signup-username"
          placeholder="Username"
          required
        />
        <i className='bx bx-user'></i>
      </div>
      <div className="input-box">
        <input
          type="email"
          id="signup-email"
          placeholder="Email"
          required
        />
        <i className='bx bx-envelope'></i>
      </div>
      <div className="input-box">
        <input
          type="password"
          id="signup-password"
          placeholder="Password"
          required
        />
        <i className='bx bx-lock-alt'></i>
      </div>
      <button type="submit" className="btn-login">
        Sign Up
      </button>
      <div className="register-link">
        <p>
          Already have an account? <a href="#" id="show-login">Login</a>
        </p>
      </div>
    </form>
  </div>
</body>


    </div>
  )
}

export default login