import { signed } from '../firebase/auth.js';

export default () => {
  const viewLogin = `<main class="registro"><h1 class= 'nombreSn'>MISTERIO</h1>
  <section id='container' class='container'
  <h2 class='bienvenida'>BIENVENID@ INGRESA AQUI</h2>
  <p><input type= 'email' id= 'email' placeholder='email' > </p>
  <p><input type= 'password' id= 'password' placeholder='contraseña'></p>
  <button class='login' id='login'>Iniciar sesión</button>
  <h3>o ingresa con</h1>
  <a href= '#/loginGoogle'<button class='loginGoogle' id='loginGoogle'><img class="logo" src= './imagenes/Google.png' alt=logo Google>Iniciar con Google</button></a>
  <h3>¿Aun no tienes cuenta con MISTERIO?</h1>
  <a href= '#/registro'><button class='registrate' id='registrate'>Registrate aqui</button></a>
  </section>
  </main>
 `;

  const divElement = document.createElement('div');
  divElement.classList.add('position');
  divElement.innerHTML = viewLogin;
  const botonLogin = divElement.querySelector('#login');
  botonLogin.addEventListener('click', () => {
    const email = divElement.querySelector('#email').value;
    const password = divElement.querySelector('#password').value;
    signed(email, password);
  });
  return divElement;
};
