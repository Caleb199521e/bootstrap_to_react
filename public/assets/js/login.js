document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const showSignupLink = document.getElementById('show-signup');
    const showLoginLink = document.getElementById('show-login');
    const authBtn = document.getElementById('auth-btn');
    const loggedInUser = localStorage.getItem('loggedInUser');
  
    // Toggle between signup and login forms
    if (showSignupLink) {
      showSignupLink.addEventListener('click', (e) => {
        e.preventDefault();
        loginForm.classList.remove('active-form');
        signupForm.classList.add('active-form');
      });
    }
  
    if (showLoginLink) {
      showLoginLink.addEventListener('click', (e) => {
        e.preventDefault();
        signupForm.classList.remove('active-form');
        loginForm.classList.add('active-form');
      });
    }
  
    // Handle signup form submission
    if (signupForm) {
      signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('signup-username').value;
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;
  
        // Example using localStorage (replace with server-side implementation if needed)
        const userData = { username, email, password };
        localStorage.setItem(username, JSON.stringify(userData));
  
        // Log in the user immediately
        loginUser(username);
      });
    }
  
    // Handle login form submission
    if (loginForm) {
      loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;
  
        // Example using localStorage (replace with server-side implementation if needed)
        const userData = JSON.parse(localStorage.getItem(username));
        if (userData && userData.password === password) {
          loginUser(username);
        } else {
          alert('Invalid username or password.');
        }
      });
    }
  
    // Handle authentication button (Login/Logout)
    if (authBtn) {
      if (loggedInUser) {
        authBtn.textContent = 'Logout';
        authBtn.onclick = () => {
          // Log the user out
          logoutUser();
        };
      } else {
        authBtn.textContent = 'Login';
        authBtn.onclick = () => {
          window.location.href = 'login.html'; // Redirect to the login page
        };
      }
    }
  
    // Function to log in the user
    function loginUser(username) {
      localStorage.setItem('loggedInUser', username);
      window.location.href = 'index.html'; // Redirect to home or dashboard page
    }
  
    // Function to log out the user
    function logoutUser() {
      localStorage.removeItem('loggedInUser');
      window.location.href = 'login.html'; // Redirect to login page
    }
  });
  