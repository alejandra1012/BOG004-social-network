import { registro } from '../firebase/auth.js';

export default () => {
  const viewRegister = `<main class='registro'><h1 class= 'nombreSn'>MISTERIO</h1>
  <section id='container' class='container'
  <h2 class='titulo'>BIENVENID@ INGRESA AQUI</h2>
  <p> <input type= 'email' id= 'email' placeholder='email' > </p>
  <p><input type= 'password' id= 'password' placeholder='contraseña'> </p>
  <p><input type= 'password' id='confirmPassword' placeholder='confirmar contraseña'> </p>
  <button class='crearCuenta' id='crearCuenta'>crear cuenta</button>
  <h3>o registrate con</h1>
  <a href= '#/loginGoogle'><button class='loginGoogle' id='loginGoogle'><img class="logo" src= 'http://assets.stickpng.com/images/5847f9cbcef1014c0b5e48c8.png' alt=logo Google>Registrate con Google</button></a>
  <h3>ya tienes cuenta con MISTERIO</h1>
  <button class='registrate' id='registrate'>Inicia secion aqui aqui</button>
  </section>
  </main>
  
 `;

  const divElement = document.createElement('div');
  divElement.classList.add('position');
  divElement.innerHTML = viewRegister;
  const email = divElement.querySelector('#email');
  const password = divElement.querySelector('#password');
  const confirmPassword = divElement.querySelector('#confirmPassword');
  const botonCrearCuenta = divElement.querySelector('#crearCuenta');
  botonCrearCuenta.addEventListener('click', () => {
    registro(email, password, confirmPassword);
  });

  return divElement;
};
