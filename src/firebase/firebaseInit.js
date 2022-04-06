// Import the functions you need from the SDKs you need
/* eslint-disable */
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js';
/* eslint-enable */
// import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  /* eslint-disable */
} from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js';
/* eslint-enable */
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB1hX3d309sNUQ-HxsJKqs-PGkgmTVRjds',
  authDomain: 'misterio-sn15-1d8fd.firebaseapp.com',
  projectId: 'misterio-sn15-1d8fd',
  storageBucket: 'misterio-sn15-1d8fd.appspot.com',
  messagingSenderId: '804314692096',
  appId: '1:804314692096:web:8a79e0d7f3c5045b0b76e5',
  measurementId: 'G-VPCYC87EMF',
};
export const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export const provider = new GoogleAuthProvider();

export {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
};
