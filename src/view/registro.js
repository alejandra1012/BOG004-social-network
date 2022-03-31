import { registro } from '../firebase/auth.js';

export default () => {
  const viewRegister = `<main class='registro'><h1 class= 'nombreSn'>MISTERIO</h1>
  <section id='container' class='container'
  <h2 class='titulo'>BIENVENID@ INGRESA AQUI</h2>
  <br></br>
  <input type= 'email' class='cajita' id= 'email' placeholder='email' > 
  <input type= 'password' class='cajita' id= 'password' placeholder='contraseña'> 
  <input type= 'password' class='cajita' id='confirmPassword' placeholder='confirmar contraseña'> 
  <br></br>
  <button class='crearCuenta' id='crearCuenta'>crear cuenta</button>
  <h3>o registrate con</h1>
  <a href= '#/loginGoogle'><button class='loginGoogle' id='loginGoogle'><img class="logo" src= './imagenes/Google.png' alt=logo Google>Registrate con Google</button></a>
  <h3>ya tienes cuenta con MISTERIO</h1>
  <button class='registrate' id='registrate'>Inicia sesión aquí</button>
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
    registro(email, password);
  });

  return divElement;
};
