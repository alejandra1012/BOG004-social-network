import { components } from '../view/index.js';

export const changeView = (hash) => {
  const id = hash.split('/')[1];
  const sectionMain = document.getElementById('container');
  sectionMain.innerHTML = '';

  switch (hash) {
    case '':
    case '#':
    case '#/registro': {
      return sectionMain.appendChild(components.registro());
    }
    case '#/iniciar-sesión':
    case '#/iniciar-sesión-google':
    case '#/muro':
    case '#/perfil': {
      return sectionMain.appendChild(components[id]());
    }
    default:
      return sectionMain.appendChild(components.different());
  }
};
