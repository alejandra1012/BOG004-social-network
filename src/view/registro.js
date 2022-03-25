export default () => {
  const viewRegister = `<h1>hola mundo</h1>`;

  const divElement = document.createElement('div');
  divElement.classList.add('position');
  divElement.innerHTML = viewRegister;
  return divElement;
};
