/* eslint-disable */
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js";
/* eslint-enable */
const auth = getAuth();
export function registro(email, password) {
  console.log(email, password);

  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      if (user) {
        return true;
      } else {
        return false;
      }
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      return false;
      // ..
    });
}
export function signed(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      window.location.hash = '#/muro';
      // // Signed in
      // //const user = userCredential.user;
      // //console.log(user);
      // if (user) {
      //   return true;
      // } else {
      //   return false;
      // //}
      // // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      return false;
      // ..
    });
}
