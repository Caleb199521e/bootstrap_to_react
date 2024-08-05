import React, { useState } from 'react';
import './Login.css'; // Import your CSS file for styling

function Login() {
  const [isLoginActive, setIsLoginActive] = useState(true);

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
    // Simulate a Google login
  };

  const handleFacebookLogin = (e) => {
    e.preventDefault();
    console.log("Facebook login clicked");
    // Simulate a Facebook login
  };

  return (
    <div className="login-page">
      <div className="wrapper">
        {isLoginActive ? (
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
                Don't have an account?{' '}
                <a href="#" onClick={handleSwitchToSignup} className="form-switch-link">
                  Register
                </a>
              </p>
            </div>
          </form>
        ) : (
          <form id="signup-form" className="active-form">
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
                Already have an account?{' '}
                <a href="#" onClick={handleSwitchToLogin} className="form-switch-link">
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
