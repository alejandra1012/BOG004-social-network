import { changeView} from './view-controler/router.js';

window.addEventListener('DOMContentLoaded', () => {

});

// const taskForm = document.getElementById('task-form');
// taskForm.addEventListener('submit', (e) => {

// });

const init = () => {
  changeView(window.location.hash)
  window.addEventListener('hashchange', () => changeView(window.location.hash));
};

window.addEventListener('load', init);
// Este es el punto de entrada de tu aplicacion

changeView();
