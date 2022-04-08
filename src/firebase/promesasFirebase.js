import { signed, loginGoogle, registro } from './firebaseController.js';

export function signedEmail(auth, email, password) {
  signed(auth, email, password)
    .then(() => {
      window.location.hash = '#/muro';
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = document.querySelector('.errorMessagelogin');
      switch (errorCode) {
        case 'auth/invalid-email':
          errorMessage.innerHTML = '❌Correo electrónico no válido';
          break;
        case 'auth/wrong-password':
          errorMessage.innerHTML = '❌Contraseña incorrecta';
          break;
        case 'auth/user-not-found':
          errorMessage.innerHTML = '⚠️ Usuario no encontrado, ¡por favor registrate!';
          break;
        default:
          errorMessage.innerHTML = '⚠️ Rellena todos los campos';
          break;
      }
    });
}

export function loginGoogleM(auth, provider) {
  loginGoogle(auth, provider)
    .then(() => {
      window.location.hash = '#/muro';
    });
}

export function registerEmail(auth, email, password, confirmPassword) {
  registro(auth, email, password, confirmPassword)
    .then(() => {
      document.querySelector('#modalMessage').style.display = 'block';
      document.querySelector('#textModal').innerHTML = 'Bienvenid@ ya eres parte de MISTERIO!';
      setTimeout(() => {
        document.querySelector('#modalMessage').style.display = 'none';
        window.location.hash = '#/muro';
      }, 3000);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessageJoin = document.querySelector('#errorMessageJoin');
      //   const errorMessage = error.message;
      //   console.log(errorCode, errorMessage);
      switch (errorCode) {
        case 'auth/invalid-email':
          errorMessageJoin.innerHTML = '❌ Correo electrónico no válido';
          break;
        case 'auth/weak-password':
          errorMessageJoin.innerHTML = '⚠️ La contraseña debe contener un mínimo de seis caracteres';
          break;
        case 'auth/email-already-in-use':
          errorMessageJoin.innerHTML = '⚠️ Tu correo electrónico ya está registrado';
          break;
        default:
          errorMessageJoin.innerHTML = '⚠️ Rellena todos los campos';
          break;
      }
    });
}
export function registerGoogle(auth, provider, GoogleAuthProvider) {
  loginGoogle(auth, provider, GoogleAuthProvider)
    .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      window.location.hash = '#/muro';
    // ...
    })
    .catch((error) => {
    // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    });
}
