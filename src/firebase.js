// Import the functions you need from the SDKs you need
/* eslint-disable */
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
/* eslint-enable */
//import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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

const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
// Initialize Firebase
const app = initializeApp(firebaseConfig);
