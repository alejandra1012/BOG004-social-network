export default () => {
  const viewLoginGoogle = `
    <h2 class="text-center">¡Bienvenid@ a nuestra página!</h2>
    <figure class="text-center">
    <img class="image" src="https://th.bing.com/th/id/OIP.ZLJLezk5gnuNIiRGO-GEWAHaLH?pid=ImgDet&rs=1" alt=
    </figure>`;

  const divElement = document.createElement('div');
  divElement.classList.add('position');
  divElement.innerHTML = viewLoginGoogle;
  return divElement;
};
