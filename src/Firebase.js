// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhjDizym-zoz8SIS5op2eKg9OnTQKJs2c",
  authDomain: "possible-decor-website.firebaseapp.com",
  projectId: "possible-decor-website",
  storageBucket: "possible-decor-website.appspot.com",
  messagingSenderId: "178776543805",
  appId: "1:178776543805:web:383b39a68c8ecc96179054",
  measurementId: "G-PFLKGE5F1Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
