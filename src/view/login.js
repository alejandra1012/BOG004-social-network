import { getAuth, provider } from '../firebase/firebaseInit.js';
import { signedEmail, loginGoogleM } from '../firebase/promesasFirebase.js';

export default () => {
  const viewLogin = `<main class='registro'>
  <section id='container' class='container'
  <h2 class='titulo'>BIENVENID@ INGRESA AQUI</h2>
  <input type= 'email' id= 'email' placeholder='email' > 
  <input type= 'password' id= 'password' placeholder='contraseña'>
  <div id='modalMessage'>
              <div id='textModal'></div>            
   </div>
   <div class='errorMessagelogin'></div>
  
  <button class='login' id='login'>Iniciar sesión</button>
  <h4>O Inicia con</h4>
  <button class='loginGoogle' id='loginGoogle'><img class='logo' src= './imagenes/Google.png' alt=logo Google></button>
  <h3>¿Aún no tienes cuenta con MISTERIO?</h3>
  <a href= '#/registro'><button class='registrate' id='registrate'>Regístrate aqui</button></a>
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
    signedEmail(email, password);
  });
  const bottonloginGoogle = divElement.querySelector('#loginGoogle');
  bottonloginGoogle.addEventListener('click', () => {
    loginGoogleM(getAuth, provider);
  });
  return divElement;
};
