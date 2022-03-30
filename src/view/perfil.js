export default () => {
  const viewPerfil = `
    <h2>¡Bienvenid@ a nuestra página!</h2>
    <figure class="text-center">
    <img class="image" src= "falta imagen" alt=
    </figure>`;

  const divElement = document.createElement('div');
  divElement.classList.add('position');
  divElement.innerHTML = viewPerfil;
  return divElement;
};
