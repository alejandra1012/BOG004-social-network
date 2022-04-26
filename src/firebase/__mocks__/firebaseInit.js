export const createUserWithEmailAndPassword = jest.fn((auth, email, password) => Promise.reject({ code: 'auth/invalid-email' }));
Promise.reject();
Promise.resolve({});
export const signInWithEmailAndPassword = () => Promise.resolve({});
export const GoogleAuthProvider = () => Promise.resolve({});
export const signInWithPopup = () => Promise.resolve({});
