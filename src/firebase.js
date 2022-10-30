// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7x1TEEQ02KJrJhjA8PsDL8fa9aks2VDc",
  authDomain: "atencion-conjunta-365122.firebaseapp.com",
  projectId: "atencion-conjunta-365122",
  storageBucket: "atencion-conjunta-365122.appspot.com",
  messagingSenderId: "920622786574",
  appId: "1:920622786574:web:ab9b4595cee2601cb0f45f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);