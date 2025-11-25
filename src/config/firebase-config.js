// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmoL3vVxyaONlryFoQZCmeZsAtSKOJ1vE",
  authDomain: "expense-tracker-935fb.firebaseapp.com",
  projectId: "expense-tracker-935fb",
  storageBucket: "expense-tracker-935fb.firebasestorage.app",
  messagingSenderId: "1068268867880",
  appId: "1:1068268867880:web:27ea76ecf27f834bb0001d",
  measurementId: "G-432J4M0FM6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
// firebase login
// firebase init
// firebase deploy