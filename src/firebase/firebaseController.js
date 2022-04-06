import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from './firebaseInit.js';

export function registro(auth, email, password, confirmPassword) {
  return createUserWithEmailAndPassword(auth, email, password, confirmPassword);
}

export function signed(auth, email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function loginGoogle(auth, provider) {
  return signInWithPopup(auth, provider);
}
