import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from './firebase.js';

export function registro(auth, email, password, confirmPassword) {
  console.log(email, password, confirmPassword);

  return createUserWithEmailAndPassword(auth, email, password, confirmPassword);
}

export function signed(auth, email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}
