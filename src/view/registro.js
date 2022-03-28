export default () => {
  const viewRegister = `<main class="registro"><h1 class= 'nombreSn'>MISTERIO</h1>
  <section id='container' class='container'
  <h2 class='bienvenida'>BIENVENID@ INGRESA AQUI</h2>
  <p> <input type= 'email' placeholder='email' > </p>
  <p><input type= 'password' placeholder='contraseña'> </p>
  <p><input type= 'password' placeholder='confirmar contraseña'> </p>
  <button class='crearCuenta' id='crearCuenta'>crear cuenta</button>
  <h3>o registrate con</h1>
  
  <button class='loginGoogle' id='loginGoogle'><img class="logo" src= 'http://assets.stickpng.com/images/5847f9cbcef1014c0b5e48c8.png' alt=logo Google>Registrate con Google</button>
  <h3>ya tienes cuenta con MISTERIO</h1>
  <button class='registrate' id='registrate'>Inicia secion aqui aqui</button>
  </section>
  </main>
  
 `
 console.log("estamos en registro");

  const divElement = document.createElement('div');
  divElement.classList.add('position');
  divElement.innerHTML = viewRegister;
  let crearCuenta = document.getElementById('crearCuenta');
 console.log(crearCuenta)
return divElement;
};
