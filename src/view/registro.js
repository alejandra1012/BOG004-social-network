import { auth, GoogleAuthProvider, provider } from '../firebase/firebaseInit.js';
import { registerEmail, registerGoogle } from '../firebase/promesasFirebase.js';

export default () => {
  const viewRegister = `<main class='registro'><h1 class= 'nombreSn'>MISTERIO</h1>
  <section id='container' class='container'
  <h2 class='titulo'>BIENVENID@ INGRESA AQUI</h2>
  <input type= 'email' id= 'email' placeholder='email' > 
  <input type= 'password' id= 'password' placeholder='contraseña'> 
  <input type= 'password' id='confirmPassword' placeholder='confirmar contraseña'> 
  

  <button class='crearCuenta' id='crearCuenta'>crear cuenta</button>
  <div id='modalMessage'>
              <div id='textModal'></div>            
          </div>
      <div id='errorMessageJoin'></div>
  
  <h3>O</h3>
  <button class='registerGoogle' id='registerGoogle'><img class='logo' src= './imagenes/Google.png' alt=logo Google>Registrate con Google</button>
  <h3>ya tienes cuenta con MISTERIO</h3>
  <a href= '#/login'><button class='creado' id='creado'>Inicia sesión aquí</button></a>
  </section>
  </main>`;

  const divElement = document.createElement('div');
  divElement.classList.add('position');
  divElement.innerHTML = viewRegister;
  const botonCrearCuenta = divElement.querySelector('#crearCuenta');
  botonCrearCuenta.addEventListener('click', () => {
    const email = divElement.querySelector('#email').value;
    const password = divElement.querySelector('#password').value;
    const confirmPassword = divElement.querySelector('#confirmPassword').value;
    const errorMessageJoin = divElement.querySelector('#errorMessageJoin');
    errorMessageJoin.innerHTML = '';

    if (confirmPassword === password) {
      registerEmail(auth, email, password, confirmPassword);
    } else {
      errorMessageJoin.innerHTML = '⚠️ confirmar contraseña es un campo obligatorio';
    }
  });

  const bottonregisterGoogle = divElement.querySelector('#registerGoogle');
  bottonregisterGoogle.addEventListener('click', () => {
    registerGoogle(auth, provider, GoogleAuthProvider);
  });
  return divElement;
};
