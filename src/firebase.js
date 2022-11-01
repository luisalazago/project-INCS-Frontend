// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBh0-7iLWX631s_BMNSk_Ex0oIOlQMst6o",
  authDomain: "prueba-ed5c0.firebaseapp.com",
  projectId: "prueba-ed5c0",
  storageBucket: "prueba-ed5c0.appspot.com",
  messagingSenderId: "378992150400",
  appId: "1:378992150400:web:363ff6b6f0cc7d8b7a6365"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);