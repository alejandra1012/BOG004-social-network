export default () => {
  const viewLoginGoogle = `
    <h2>class="text-center">¡Bienvenid@ a nuestra página!</h2>
    <figure class="text-center">
    <img class="image" src= "falta imagen" alt=
    </figure>`;

  const divElement = document.createElement('div');
  divElement.classList.add('position');
  divElement.innerHTML = viewLoginGoogle;
  return divElement;
};