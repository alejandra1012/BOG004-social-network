import { registerEmail } from '../src/firebase/promesasFirebase.js';

jest.mock('../src/firebase/firebaseInit.js');

describe('authentication', () => {
  it('deberia ser una funcion', () => {

  });
  it('deberia mostrar error auth/invalid-email', (done) => {
    const email = 'testgmailcom';
    const password = '123456';
    expect.assertion(1);
    document.body.innerHTML = '<section id="container"></section>';
    const container = document.getElementById('container');
    registerEmail(email, password)
      .then(container.textContent).toContain('❌ Correo electrónico no válido');
    done();
  });
});
