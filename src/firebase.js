// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLQ4FMm7SHEgJvdvA4pwe9qsjCv9wAlbo",
  authDomain: "react-authenticatication.firebaseapp.com",
  projectId: "react-authenticatication",
  storageBucket: "react-authenticatication.appspot.com",
  messagingSenderId: "1079711509175",
  appId: "1:1079711509175:web:a2fdcdbaa38d29f3ef3b32",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// initialize firebase authentication and get a reference

const auth = getAuth(app);

export { auth };

export default app;
