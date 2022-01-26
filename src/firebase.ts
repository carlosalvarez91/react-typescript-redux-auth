// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAen4rN6d_9fFfzh-KFf-NJ5_jKUTEIfWA",
  authDomain: "playtomic-afd23.firebaseapp.com",
  projectId: "playtomic-afd23",
  storageBucket: "playtomic-afd23.appspot.com",
  messagingSenderId: "350926750917",
  appId: "1:350926750917:web:fa638c2eae57b385221cac"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const auth = getAuth();