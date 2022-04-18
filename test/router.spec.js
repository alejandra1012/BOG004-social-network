import { changeView } from '../src/view-controler/router.js';
// import login from '../src/view/login.js';

jest.mock('../src/firebase/firebaseInit.js');

describe('ruteo', () => {
  it('deberia mostrar la vista registro', () => {
    document.body.innerHTML = '<section id="container"></section>';
    const container = document.getElementById('container');
    changeView('#/registro');
    // console.log('document body: ', document.body);
    // changeView('#/login');
    expect(container.textContent).toContain('BIENVENID@ INGRESA AQUI');
  });
});
