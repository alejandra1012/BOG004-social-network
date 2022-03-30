/* eslint-disable */
import {getAuth,createUserWithEmailAndPassword,} from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js";
/* eslint-enable */
export function registro(email, password, confirmPassword) {
  console.log(email, password, confirmPassword);
  const auth = getAuth();
  return createUserWithEmailAndPassword(auth, email, password, confirmPassword)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      if (user) {
        return true;
      }
      else {
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
