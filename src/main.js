import { changeView } from './controlador-vistas/index.js';

window.addEventListener('DOMContentLoaded', () => {

});

const taskForm = document.getElementById('task-form');
taskForm.addEventListener('submit', (e) => {

});

const init = () => {
  window.addEventListener('hashchange', () => changeView(window.location.hash));
};

window.addEventListener('load', init);
// Este es el punto de entrada de tu aplicacion

changeView();
