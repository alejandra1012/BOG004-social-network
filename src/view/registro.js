import { auth } from '../firebase/firebase.js';
import { registro } from '../firebase/auth.js';

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
  
  <h3>o registrate con</h3>
  <a href= '#/loginGoogle'><button class='loginGoogle' id='loginGoogle'><img class='logo' src= './imagenes/Google.png' alt=logo Google>Registrate con Google</button></a>
  <h3>ya tienes cuenta con MISTERIO</h3>
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
    const errorMessageJoin = divElement.querySelector('#errorMessageJoin');
    errorMessageJoin.innerHTML = '';

    if (confirmPassword === password) {
      registro(auth, email, password, confirmPassword)
        .then(() => {
          divElement.querySelector('#modalMessage').style.display = 'block';
          divElement.querySelector('#textModal').innerHTML = 'Bienvenid@ ya eres parte de MISTERIO!';
          setTimeout(() => {
            divElement.querySelector('#modalMessage').style.display = 'none';
            window.location.hash = '#/muro';
          }, 3000);

          console.log('crearCuenta');
        })
        .catch((error) => {
          const errorCode = error.code;
          //   const errorMessage = error.message;
          //   console.log(errorCode, errorMessage);
          switch (errorCode) {
            case 'auth/invalid-email':
              errorMessageJoin.innerHTML = '❌ Invalid Email';
              break;
            case 'auth/weak-password':
              errorMessageJoin.innerHTML = '⚠️ The password must contain minimum six characters';
              break;
            case 'auth/email-already-in-use':
              errorMessageJoin.innerHTML = '⚠️ Your email is already registered';
              break;
            default:
              errorMessageJoin.innerHTML = '⚠️ Fill in all the fields';
              break;
          }
        });
    } else {
      errorMessageJoin.innerHTML = '⚠️confirmPassword is a require field';
      console.log('No ingreso confirmPassword');
    }
  });
  return divElement;
};
