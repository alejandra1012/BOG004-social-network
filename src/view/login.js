import { auth, provider } from '../firebase/firebaseInit.js';
import { signed, loginGoogle } from '../firebase/firebaseController.js';

export default () => {
  const viewLogin = `<main class='registro'><h1 class= 'nombreSn'>MISTERIO</h1>
  <section id='container' class='container'
  <h2 class='bienvenida'>BIENVENID@ INGRESA AQUI</h2>
  <p><input type= 'email' id= 'email' placeholder='email' > </p>
  <p><input type= 'password' id= 'password' placeholder='contraseña'></p>
  <div id='modalMessage'>
              <div id='textModal'></div>            
   </div>
   <div class='errorMessagelogin'></div>
  
  <button class='login' id='login'>Iniciar sesión</button>
  <h3>O</h3>
  <button class='loginGoogle' id='loginGoogle'><img class='logo' src= './imagenes/Google.png' alt=logo Google>Inicia con Google</button>
  <h3>¿Aun no tienes cuenta con MISTERIO?</h3>
  <a href= '#/registro'><button class='registrate' id='registrate'>Registrate aqui</button></a>
  </section>
  </main>
 `;

  const divElement = document.createElement('div');
  divElement.classList.add('position');
  divElement.innerHTML = viewLogin;

  const errorMessage = divElement.querySelector('.errorMessagelogin');
  // console.log('este error message: ', errorMessage);

  const botonLogin = divElement.querySelector('#login');

  botonLogin.addEventListener('click', () => {
    const email = divElement.querySelector('#email').value;
    const password = divElement.querySelector('#password').value;

    signed(auth, email, password)
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
        // Creamos casos de error para inicio de sesion de usuario ya registrado
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
  });
  const bottonloginGoogle = divElement.querySelector('#loginGoogle');
  bottonloginGoogle.addEventListener('click', () => {
    loginGoogle(auth, provider)
      .then(() => {
        window.location.hash = '#/muro';
      });
  });
  return divElement;
};
