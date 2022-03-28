export default () => {
  const viewLogin = 
  `<main class="registro"><h1 class= 'nombreSn'>MISTERIO</h1>
  <section id='container' class='container'
  <h2 class='bienvenida'>BIENVENID@ INGRESA AQUI</h2>
  <p><input type= 'email' placeholder='email' > </p>
  <p><input type= 'password' placeholder='contraseña'></p>
  <button class='login' id='login'>Iniciar secion</button>
  <h3>o ingresa con</h1>
  <button class='loginGoogle' id='loginGoogle'><img class="logo" src= 'http://assets.stickpng.com/images/5847f9cbcef1014c0b5e48c8.png' alt=logo Google>Registrate con Google</button>
  <h3>¿Aun no tienes cuenta con MISTERIO?</h1>
  <button class='registrate' id='registrate'>Registrate aqui</button>
  </section>
  </main>
 `;

  const divElement = document.createElement('div');
  divElement.classList.add('position');
  divElement.innerHTML = viewLogin;
  return divElement;
};
