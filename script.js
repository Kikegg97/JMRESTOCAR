const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');


signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});


signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9wOsRtRCDSblxb_MxL2rnjfi-xGkD10s",
  authDomain: "proyecto-integrador2-97205.firebaseapp.com",
  projectId: "proyecto-integrador2-97205",
  storageBucket: "proyecto-integrador2-97205.appspot.com",
  messagingSenderId: "726342664042",
  appId: "1:726342664042:web:666a6ae2d57787e48def13",
  measurementId: "G-4P885PGF9F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);