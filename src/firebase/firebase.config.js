// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAY_QqrOBfKKXpvwlDafGMf01p-jTu6BbA",
  authDomain: "the-timepieces-website.firebaseapp.com",
  projectId: "the-timepieces-website",
  storageBucket: "the-timepieces-website.appspot.com",
  messagingSenderId: "360073777052",
  appId: "1:360073777052:web:1d390b2211488cb1030259",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;