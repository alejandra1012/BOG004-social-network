import { auth, provider } from '../firebase/firebaseInit.js';
import { signedEmail, loginGoogleM } from '../firebase/promesasFirebase.js';

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
  errorMessage.innerHTML = '';

  const botonLogin = divElement.querySelector('#login');

  botonLogin.addEventListener('click', () => {
    const email = divElement.querySelector('#email').value;
    const password = divElement.querySelector('#password').value;
    signedEmail(auth, email, password);
  });
  const bottonloginGoogle = divElement.querySelector('#loginGoogle');
  bottonloginGoogle.addEventListener('click', () => {
    loginGoogleM(auth, provider);
  });
  return divElement;
};
