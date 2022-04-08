import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    this.elem = this.createModalWindow(); 
    };
  setTitle(value){
   let title = this.elem.querySelector('.modal__title') ;
    title.append(value);
  }
  setBody(value){
   let node = this.elem.querySelector('.modal__body');
    node.append(value);
  }

  deleteModalWindow(){
    let body = document.body; 
    this.elem.remove();
    body.classList.remove('is-modal-open');
  };
  close(){
    this.deleteModalWindow();
  };

  buttonClose(){
   let button = document.querySelector('.modal__close');
    button.addEventListener('click',()=>{
    this.deleteModalWindow();
    });
  };
  buttonEsc(){
    const onclick = (e)=> {
     if (e.key == 'Escape') {
        this.deleteModalWindow();
        document.removeEventListener('keydown', onclick);
      };
    };
    document.addEventListener('keydown', (onclick));                                                                                  
  };

  createModalWindow(){
  let modal = createElement(`
  <div class="container">
    <!--Корневой элемент Modal-->
    <div class="modal">
      <!--Прозрачная подложка перекрывающая интерфейс-->
      <div class="modal__overlay"></div>

      <div class="modal__inner">
        <div class="modal__header">
          <!--Кнопка закрытия модального окна-->
          <button type="button" class="modal__close">
            <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
          </button>

          <h3 class="modal__title">
          </h3>
        </div>

        <div class="modal__body">
        </div>
      </div>

    </div>
  </div>`);
  return modal;
};
  open(){
    let body = document.body;
    body.append(this.elem);

    body.classList.add('is-modal-open');

    this.buttonClose();
    this.buttonEsc();
    }; 
  };  
