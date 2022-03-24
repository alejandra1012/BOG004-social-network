export default () => {
    

const divElement = document.createElement('div');
divElement.classList.add('position')
const viewRegister = `<h1>hola mundo</h1>`
divElement.innerHTML = viewRegister;
return divElement;
}