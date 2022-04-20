import {
  crearPublicacion,
  getPost,
  readAllPost,
  currentUser,
  borrarPost,
  cerrarSesion,
  accedeAlPost,
  actualizarPost,
  likes,
  dislikes,
}
  from '../firebase/firebaseController.js';

export default () => {
  const viewMuro = `
  <header>
  <div class='titulo-muro'>MURO</div>
</header>
<div class='cerrar'><i class='fa-solid fa-arrow-right-from-bracket' id='cerrarSesion' ></i></div>
<main class='main-daily'>
  <div id='modal-background'>
    <form id='modal_post-container' class='modal_post-container'>
      <div id='modal_header'>
      <img id='img-usuario' src='../imagenes/alien.png'>
        <div class='name-container'>MiSTERIOSO</div>
        <i class='fa-solid fa-xmark' id='close'></i>
      </div>
      <div id='line'>
        <div id='text-container'>
          <textarea type='text' id='post-description' placeholder='Cuéntanos tu historia'></textarea>
        </div>
      </div>
      <button disabled type='submit' id='btn-post-save' class='btn-post-inactive'>Save</button>  
    </form>
  </div>
  <button type='button' id='btn-post-create' class='btn-post-create'>Comment +</button>        
  <div id='post-container' class='post-container'></div>       
</main>
<footer id='create-post'>          
</footer>
`;

  const divElement = document.createElement('div');
  divElement.classList.add('position');
  divElement.innerHTML = viewMuro;
  const userInfo = currentUser();
  let userId = '';
  if (userInfo !== null) {
    userId = userInfo.uid;
  }
  // console.log('===============================>>>>>SOY YO: ', userId);
  const btnCreate = divElement.querySelector('#btn-post-create');
  const background = divElement.querySelector('#modal-background');
  const modalPost = divElement.querySelector('#modal_post-container');
  const postDescription = divElement.querySelector('#post-description');
  // Evento Boton crear
  btnCreate.addEventListener('click', () => {
    background.style.display = 'flex';
    modalPost.style.display = 'block';
    postDescription.focus();
    postDescription.value = '';
  });

  // Crear Post
  const putUp = () => {
    const postForm = divElement.querySelector('#modal_post-container');
    postForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const postFormContent = postForm['post-description'];
      // const postUid = currentUserInfo.uid;
      const likeIds = []; // Array vacio para likes
      crearPublicacion(postFormContent.value, userId, likeIds);
      modalPost.reset();
    });
  };
  putUp(userInfo);

  // Controlador de Post (Read, Update, Delete)
  const postController = () => {
    const postContainer = divElement.querySelector('#post-container');
    const querySnapshot = getPost();
    const sessionUserId = JSON.parse(sessionStorage.getItem('userId'));
    console.log(sessionUserId);

    // función para leer las publicaciones en tiempo real
    readAllPost((response) => {
      let postTemplate = '';
      response.forEach((doc) => {
        const post = doc.data();
        let deleteEditSection;
        // const userIdLogin = sessionUserId;
        if (userId === post.uid) {
          deleteEditSection = `
            <button class='edit-img' id='edit' data-postid='${doc.id}'>Editar</button>
            <button class='save-img hidenBtn'  id='save'  data-postid='${doc.id}'>Guardar</button>
            <i class='fa-solid fa-xmark' id='close'></i>
            <button class='delete-img' id='delete' data-postid='${doc.id}'>Eliminar</button>          
          `;
        } else {
          deleteEditSection = '<h2>Hola</h2>';
        }
        const likeIcon = post.arrayLike.includes(sessionUserId);
        postTemplate += `
          <div id='div-post-container' class='div-post-container'> 
            <div id='post-container-header' class='post-container-header'>
            <img id='img-usuario' src='../imagenes/alien.png'>
              <div class='name-container'>MISTERIOSO</div>
              <div class='btns-post-container'>${deleteEditSection}
              </div>
            </div>
            <textarea type='text' class='post-content inp-post-modal-post' readonly id='${doc.id}'>${doc.data().postDescription}</textarea>  
            <div class='counter-likebtn'>
              <button class='like' id='${doc.id}'><i class="${likeIcon}" id='${doc.id}></i></button>
              <div>
              <p>ESTOY AQUI'</p>
              <p class='like-lenght'>${post.arrayLike.length}</p>
              </div>
            </div>
          </div>    
        `;
      });
      postContainer.innerHTML = postTemplate;

      // Eliminar post
      const eliminarPost = () => {
        const deleteButton = divElement.querySelectorAll('#delete');
        deleteButton.forEach((btnDelete) => {
          btnDelete.addEventListener('click', ({ target: { dataset } }) => {
            borrarPost(dataset.postid);
          });
        });
      };
      eliminarPost();

      // Editar Post
      const editPost = () => {
        const editPostDescrip = divElement.querySelectorAll('.post-content');
        const editBtn = divElement.querySelectorAll('#edit');
        const saveBtn = divElement.querySelectorAll('#save');
        editBtn.forEach((btnEdit, index) => {
          btnEdit.addEventListener('click', (e) => {
            const clickBtnEdit = e.target.dataset.postid;
            accedeAlPost(clickBtnEdit)
              .then(() => {
                editPostDescrip.forEach((textArea) => {
                  if (textArea.id === clickBtnEdit) {
                    textArea.removeAttribute('readonly');
                    btnEdit.classList.add('hidenBtn');
                    saveBtn[index].classList.remove('hidenBtn');
                  }
                });
              });
          });
        });
        saveBtn.forEach((btnSave, index) => {
          btnSave.addEventListener('click', (e) => {
            const clickBtn = e.target.dataset.postid;
            accedeAlPost(clickBtn)
              .then(() => {
                editPostDescrip.forEach((textArea) => {
                  if (textArea.id === clickBtn) {
                    textArea.setAttribute('readonly', true);
                    btnSave.classList.add('hidenBtn');
                    editBtn[index].classList.remove('hidenBtn');
                    const postDescription1 = textArea.value;
                    actualizarPost(textArea.id, { postDescription1 });
                  }
                });
              });
          });
        });
      };
      editPost();

      // Dar like
      const darLike = () => {
        const userInfoId = sessionUserId.uid;
        const btnLikes = divElement.querySelectorAll('.like');
        btnLikes.forEach((like) => {
          like.addEventListener('click', () => {
            const liked = like.id;
            accedeAlPost(liked)
              .then((docLike) => {
                const justOnePost = docLike.data();
                const likeIds = justOnePost.arrayLike;
                if (likeIds.includes(userInfoId)) {
                  dislikes(liked, userInfoId);
                } else {
                  likes(liked, userInfoId);
                }
              });
            // .catch((error) => {
            //   showNotification(error);
            // });
          });
        });
      };
      darLike();
    // FIN funcion para dar like al post
    });
    readAllPost(querySnapshot);
  };
  postController();

  // declaracion modalClose para evento de cierre de modal
  const modalClose = divElement.querySelector('#close');
  modalClose.addEventListener('click', () => {
    background.style.display = 'none';
    modalPost.style.display = '';
  });

  // Función para no publicar espacios en blanco
  const btnSave = divElement.querySelector('#btn-post-save');
  postDescription.addEventListener('keyup', () => { // evento del textarea
    const postContent = postDescription.value.trim();
    // trim() metodo que no permite activar boton con espacio
    if (postContent === '') {
      btnSave.disabled = true; // boton publicar inactivo
    } else {
      btnSave.disabled = false; // boton publicar activo
    }
  });

  // Evento click a boton de cerrar sesión
  const btnCerrarSesion = divElement.querySelector('#cerrarSesion');
  btnCerrarSesion.addEventListener('click', (e) => {
    e.preventDefault();
    cerrarSesion()
      .then(() => {
        window.location.hash = '#/login';
      });
  });

  return divElement;
};
