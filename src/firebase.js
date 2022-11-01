// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDS1tRrHEUif6FgXcj5b5Tc_IdXqEJ35qY",
  authDomain: "proyecto-social-6c9d8.firebaseapp.com",
  projectId: "proyecto-social-6c9d8",
  storageBucket: "proyecto-social-6c9d8.appspot.com",
  messagingSenderId: "579438480998",
  appId: "1:579438480998:web:8a55fe39c69bf3d241e7a7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);