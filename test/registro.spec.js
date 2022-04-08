import { registro } from '../src/firebase/firebaseController.js';

jest.mock('../src/firebase/firebaseInit.js');
describe('registro', () => {
  it('debería ser una función', () => {
    expect(typeof registro).toBe('function');
  });
});
