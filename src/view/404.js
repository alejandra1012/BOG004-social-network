export default () => {
  const viewDifferent = `
    <h2>404</h2>
    <h1>Página no encontrada</h1>
    <p>El archivo específico no se encontró en este sitio web. Por favor compruebe la url
    `;
  const divElement = document.createElement('div');
  divElement.setAttribute('id', 'message');
  divElement.innerHTML = viewDifferent;
  return divElement;
};
