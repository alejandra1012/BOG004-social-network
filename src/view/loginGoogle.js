export default () => {
  const viewLoginGoogle = `<main class="registro"><h1 class= 'nombreSn'>MISTERIO</h1>
  <section id='container' class='container'
  <h2 class='bienvenida'>BIENVENID@ INGRESA AQUI</h2>
  <p><input type= 'email' placeholder='email' > </p>
  <p><input type= 'password' placeholder='contraseña'></p>
  <a href= '#/loginGoogle'<button class='loginGoogle' id='loginGoogle'><img class="logo" src= 'http://assets.stickpng.com/images/5847f9cbcef1014c0b5e48c8.png' alt=logo Google>Iniciar con Google</button></a>
  <h3>¿Aun no tienes cuenta con MISTERIO?</h1>
  <a href= '#/registro'><button class='registrate' id='registrate'>Registrate aqui</button></a>
  </section>
  </main>
 `;

  const divElement = document.createElement('div');
  divElement.classList.add('position');
  divElement.innerHTML = viewLoginGoogle;
  return divElement;
};
