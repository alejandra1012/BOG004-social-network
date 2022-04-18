// eslint-disable-next-line import/no-unresolved
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js';

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
// eslint-disable-next-line import/no-unresolved
} from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js';

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc,
  onSnapshot,
  doc,
  query,
  serverTimestamp,
  orderBy,
  deleteDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  // eslint-disable-next-line import/no-unresolved
} from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js';

const firebaseConfig = {
  apiKey: 'AIzaSyB1hX3d309sNUQ-HxsJKqs-PGkgmTVRjds',
  authDomain: 'misterio-sn15-1d8fd.firebaseapp.com',
  projectId: 'misterio-sn15-1d8fd',
  storageBucket: 'misterio-sn15-1d8fd.appspot.com',
  messagingSenderId: '804314692096',
  appId: '1:804314692096:web:8a79e0d7f3c5045b0b76e5',

};
export const app = initializeApp(firebaseConfig);

// export const auth = getAuth();

export const provider = new GoogleAuthProvider();

export const db = getFirestore();

export {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc,
  onSnapshot,
  doc,
  query,
  serverTimestamp,
  orderBy,
  deleteDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
};
