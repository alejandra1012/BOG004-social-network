// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';

myFunction();
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1hX3d309sNUQ-HxsJKqs-PGkgmTVRjds",
  authDomain: "misterio-sn15-1d8fd.firebaseapp.com",
  projectId: "misterio-sn15-1d8fd",
  storageBucket: "misterio-sn15-1d8fd.appspot.com",
  messagingSenderId: "804314692096",
  appId: "1:804314692096:web:8a79e0d7f3c5045b0b76e5",
  measurementId: "G-VPCYC87EMF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
