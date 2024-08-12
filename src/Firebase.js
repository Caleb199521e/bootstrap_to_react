// Firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your Firebase configuration
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

// Initialize Firestore and Auth
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
