import { auth, GoogleAuthProvider, provider } from '../firebase/firebaseInit.js';
import { registro, loginGoogle } from '../firebase/firebaseController.js';

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
      registro(auth, email, password, confirmPassword)
        .then(() => {
          divElement.querySelector('#modalMessage').style.display = 'block';
          divElement.querySelector('#textModal').innerHTML = 'Bienvenid@ ya eres parte de MISTERIO!';
          setTimeout(() => {
            divElement.querySelector('#modalMessage').style.display = 'none';
            window.location.hash = '#/muro';
          }, 3000);
        })
        .catch((error) => {
          const errorCode = error.code;
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
    } else {
      errorMessageJoin.innerHTML = '⚠️ confirmar contraseña es un campo obligatorio';
    }
  });

  const bottonregisterGoogle = divElement.querySelector('#registerGoogle');
  bottonregisterGoogle.addEventListener('click', () => {
    loginGoogle(auth, provider, GoogleAuthProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        window.location.hash = '#/muro';
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  });
  return divElement;
};
