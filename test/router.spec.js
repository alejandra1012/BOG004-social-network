import { changeView } from '../src/view-controler/router.js';
// import login from '../src/view/login.js';

jest.mock('../src/firebase/firebaseInit.js');

const viewRegister = () => {
  const divElement = document.createElement('div');
  divElement.innerHTML = '<p>esto es un texto de prueba para registro</p>';
  return divElement;
};
const viewLogin = () => {
  const divElement = document.createElement('div');
  divElement.innerHTML = '<p>esto es un texto de prueba para login</p>';
  return divElement;
};
const viewMuro = () => {
  const divElement = document.createElement('div');
  divElement.innerHTML = '<p>esto es un texto de prueba para muro</p>';
  return divElement;
};
const viewPerfil = () => {
  const divElement = document.createElement('div');
  divElement.innerHTML = '<p>esto es un texto de prueba para perfil</p>';
  return divElement;
};
const viewDifferent = () => {
  const divElement = document.createElement('div');
  divElement.innerHTML = '<p>esto es un texto de prueba para different</p>';
  return divElement;
};

const componentes = {
  registro: viewRegister,
  login: viewLogin,
  muro: viewMuro,
  perfil: viewPerfil,
  different: viewDifferent,
};

describe('ruteo', () => {
  it('deberia mostrar la vista registro', () => {
    document.body.innerHTML = '<section id="container"></section>';
    const container = document.getElementById('container');
    changeView('#/registro', componentes);
    // console.log('document body: ', document.body);
    // changeView('#/login');
    expect(container.textContent).toEqual('esto es un texto de prueba para registro');
  });
  it('deberia mostrar la vista login', () => {
    document.body.innerHTML = '<section id="container"></section>';
    const container = document.getElementById('container');
    changeView('#/login', componentes);
    // console.log('document body: ', document.body);
    // changeView('#/login');
    expect(container.textContent).toEqual('esto es un texto de prueba para login');
  });
  it('deberia mostrar la vista muro', () => {
    document.body.innerHTML = '<section id="container"></section>';
    const container = document.getElementById('container');
    changeView('#/muro', componentes);
    // console.log('document body: ', document.body);
    // changeView('#/login');
    expect(container.textContent).toEqual('esto es un texto de prueba para muro');
  });
  it('deberia mostrar la vista perfil', () => {
    document.body.innerHTML = '<section id="container"></section>';
    const container = document.getElementById('container');
    changeView('#/perfil', componentes);
    // console.log('document body: ', document.body);
    // changeView('#/login');
    expect(container.textContent).toEqual('esto es un texto de prueba para perfil');
  });
  it('deberia mostrar la vista different', () => {
    document.body.innerHTML = '<section id="container"></section>';
    const container = document.getElementById('container');
    changeView('#/different', componentes);
    // console.log('document body: ', document.body);
    // changeView('#/login');
    expect(container.textContent).toEqual('esto es un texto de prueba para different');
  });
});
