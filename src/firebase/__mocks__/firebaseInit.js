export const createUserWithEmailAndPassword = jest.fn((auth, email, password) => Promise.reject({ code: 'auth/invalid-email' }));
Promise.rejects();
Promise.resolve({});
export const signInWithEmailAndPassword = () => Promise.resolve({});
export const GoogleAuthProvider = () => Promise.resolve({});
export const signInWithPopup = () => Promise.resolve({});
