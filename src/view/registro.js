import { GoogleAuthProvider, provider } from '../firebase/firebaseInit.js';
import { registerEmail, registerGoogle } from '../firebase/promesasFirebase.js';

export default () => {
  const viewRegister = `<main class='registro'>
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
  
  <h4>O Registrate con</h4>
  <button class='loginGoogle' id='registerGoogle'><img class='logo' src= './imagenes/Google.png' alt=logo Google></button>
  <h3>¿ya tienes cuenta con MISTERIO?</h3>
  <a href= '#/login'><button class='registrate' id='creado'>Inicia sesión aquí</button></a>
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
      registerEmail(email, password, confirmPassword)
        .then(() => {
          const sessionUser = sessionStorage.getItem('userId');
          if (sessionUser === 'logOut') {
            const elemento = document.querySelector('#modalMessage');
            document.querySelector('#textModal').innerHTML = 'Bienvenid@ ya eres parte de MISTERIO!';
            elemento.style.display = 'block';
          }
        });
    } else {
      errorMessageJoin.innerHTML = '⚠️ confirmar contraseña es un campo obligatorio';
    }
  });

  const bottonregisterGoogle = divElement.querySelector('#registerGoogle');
  bottonregisterGoogle.addEventListener('click', () => {
    registerGoogle(provider, GoogleAuthProvider);
  });

  return divElement;
};
