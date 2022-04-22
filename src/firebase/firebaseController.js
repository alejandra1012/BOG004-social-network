import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  db,
  collection,
  addDoc,
  getDocs,
  getDoc,
  onSnapshot,
  doc,
  query,
  updateDoc,
  serverTimestamp,
  orderBy,
  deleteDoc,
  provider,
  arrayUnion,
  arrayRemove,
}
  from './firebaseInit.js';

export function registro(email, password, confirmPassword) {
  const auth = getAuth();
  return createUserWithEmailAndPassword(auth, email, password, confirmPassword);
}

export function signed(email, password) {
  const auth = getAuth();
  return signInWithEmailAndPassword(auth, email, password);
}

export function loginGoogle() {
  const auth = getAuth();
  return signInWithPopup(auth, provider);
}

export const watcher = () => {
  const auth = getAuth();
  return onAuthStateChanged(auth, (user) => {
    if (user === null || user === undefined) {
      window.location.hash = '#/login';
    } else {
      window.location.hash = '#/muro';
    }
  });
};

export const currentUser = () => {
  watcher();
  const auth = getAuth();
  const user = auth.currentUser;
  if (user === null || user === undefined) {
    window.location.hash = '#/login';
  } else {
    window.location.hash = '#/muro';
  }
  return user;
};

const dbPublicar = collection(db, 'posts');

export function crearPublicacion(postDescription, uid, arrayLike, email) {
  return addDoc(dbPublicar, {
    postDescription, email, uid, arrayLike, postCreatedAt: serverTimestamp(),
  });
}

export function getPost() {
  return getDocs(dbPublicar);
}

const publicacionOrganizada = query(dbPublicar, orderBy('postCreatedAt', 'desc'));

export function readAllPost(querySnapshot) {
  return onSnapshot(publicacionOrganizada, querySnapshot);
}
/*
const q = query(collection(db, "cities"), where("state", "==", "CA"));
const unsubscribe = onSnapshot(q, (querySnapshot) => {
  const cities = [];
  querySnapshot.forEach((doc) => {
      cities.push(doc.data().name);
  });
  console.log("Current cities in CA: ", cities.join(", "));
}); */
export function borrarPost(id) {
  return deleteDoc(doc(dbPublicar, id));
}

export function accedeAlPost(id) {
  const docRef = doc(dbPublicar, id);
  const docSnap = getDoc(docRef);
  return docSnap;
}

export function actualizarPost(id, descripcionPostAct) {
  return updateDoc(doc(dbPublicar, id), descripcionPostAct);
}

export function likes(id, userInfoId) {
  return updateDoc(doc(dbPublicar, id), { arrayLike: arrayUnion(userInfoId) });
}

export function dislikes(id, userInfoId) {
  return updateDoc(doc(dbPublicar, id), { arrayLike: arrayRemove(userInfoId) });
}

export function cerrarSesion() {
  const auth = getAuth();
  const logOutUser = signOut(auth);
  return logOutUser;
}

export { getAuth };
