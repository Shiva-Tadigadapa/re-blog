


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCx4ERqKgSaFCvMRnfhj2EY1uP1HrGlyi0",
  authDomain: "latest--blog.firebaseapp.com",
  projectId: "latest--blog",
  storageBucket: "latest--blog.appspot.com",
  messagingSenderId: "813081183545",
  appId: "1:813081183545:web:29891bd97d5d43e57cd4e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export default app;