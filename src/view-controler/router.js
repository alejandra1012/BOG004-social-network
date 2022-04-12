import { components } from '../view/index.js';

export const changeView = (hash, _components = components) => {
  const id = hash.split('/')[1];
  const sectionMain = document.getElementById('container');
  sectionMain.innerHTML = '';
  switch (hash) {
    case '':
    case '#':
    case '#/login': {
      return sectionMain.appendChild(_components.login());
    }
    case '#/registro':
    case '#/muro':
    case '#/perfil': {
      return sectionMain.appendChild(_components[id]());
    }
    default:
      return sectionMain.appendChild(_components.different());
  }
};
