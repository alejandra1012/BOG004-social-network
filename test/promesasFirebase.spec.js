import { registerEmail } from '../src/firebase/promesasFirebase.js';

jest.mock('../src/firebase/firebaseInit.js');

describe('auth/invalid-email', () => {
  it('deberia mostrar error', () => {
    document.body.innerHTML = '<section id="container"></section>';
    const container = document.getElementById('container');
    registerEmail('email');
    expect(container.textContent).toContain('❌ Correo electrónico no válido');
  });
});
