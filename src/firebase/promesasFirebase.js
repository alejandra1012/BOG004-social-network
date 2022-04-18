import { signed, loginGoogle, registro } from './firebaseController.js';

export function signedEmail(email, password) {
  return signed(email, password)
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
  return loginGoogle(auth, provider)
    .then(() => {
      window.location.hash = '#/muro';
    });
}

export function registerEmail(email, password, confirmPassword) {
  return registro(email, password, confirmPassword)
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
  return loginGoogle(auth, provider, GoogleAuthProvider)
    .then(() => {
      window.location.hash = '#/muro';
    // ...
    });
}
