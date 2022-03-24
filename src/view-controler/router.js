import { components} from "../view/index.js"

const changeView = (route) => {
  const container = document.getElementById("container")
  container.innerHTML = "";
  switch (route) {
    case "#/registro": { 
      return container.appendChild(components.registro()) }
      case "#/iniciar-sesión":
        {return container.appendChild(components.login()) }
     default:
         break; 
    
  }
  console.log(route);
};

export { changeView };
 