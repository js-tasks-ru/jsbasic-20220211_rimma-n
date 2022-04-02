import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.elem = this._createLenta();
    this._eventArrow();
    this._eventMenuClick();
  }
_createLenta(){
  let createDiv = createElement(`
    <!--Корневой элемент RibbonMenu-->
    <div class="ribbon">

      <!--Кнопка прокрутки влево-->
      <button class="ribbon__arrow ribbon__arrow_left ribbon__arrow_visible">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </button>
  
      <!--Ссылки на категории-->
      <nav class="ribbon__inner">
        <a href="#" class="ribbon__item ribbon__item_active" data-id="">All</a>
        <a href="#" class="ribbon__item" data-id="salads">Salads</a>
        <a href="#" class="ribbon__item" data-id="soups">Soups</a>
        <a href="#" class="ribbon__item" data-id="chicken-dishes">Chicken dishes</a>
        <a href="#" class="ribbon__item" data-id="beef-dishes">Beef dishes</a>
        <a href="#" class="ribbon__item" data-id="seafood-dishes">Seafood dishes</a>
        <a href="#" class="ribbon__item" data-id="vegetable-dishes">Vegetable dishes</a>
        <a href="#" class="ribbon__item" data-id="bits-and-bites">Bits and bites</a>
        <a href="#" class="ribbon__item" data-id="on-the-side ribbon__item_active">On the side</a>
      </nav>
  
      <!--Кнопка прокрутки вправо-->
      <button class="ribbon__arrow ribbon__arrow_right">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </button>
    </div>
  </div>`)  
return createDiv;
}

_eventArrow(){
  const ribbonArrowRight = this.elem.querySelector('.ribbon__arrow_right');
  const ribbonArrowLeft = this.elem.querySelector('.ribbon__arrow_left');
  const ribbonInner = this.elem.querySelector('.ribbon__inner');//лента

  ribbonArrowRight.classList.toggle("ribbon__arrow_visible");//добавить класс, если его нет, иначе удалить.
  ribbonArrowLeft.classList.toggle("ribbon__arrow_visible");

  ribbonArrowRight.addEventListener("click", () => {
    let scrollWidth = ribbonInner.scrollWidth;
    let scrollLeft = ribbonInner.scrollLeft;
    let clientWidth = ribbonInner.clientWidth;
    let scrollRight = scrollWidth - scrollLeft - clientWidth;
       
    ribbonInner.scrollBy(350, 0);//скроллим по X
      if (scrollRight > 1) {
           ribbonArrowLeft.classList.add("ribbon__arrow_visible");
      } 
      else if (scrollRight < 1) {
         ribbonArrowRight.classList.remove("ribbon__arrow_visible");
         ribbonArrowLeft.classList.add("ribbon__arrow_visible");
        };
      });

   ribbonArrowLeft.addEventListener("click", () => {
    let scrollLeft = ribbonInner.scrollLeft;

    ribbonInner.scrollBy(-350, 0);
      if (scrollLeft === 0){
         ribbonArrowLeft.classList.remove('ribbon__arrow_visible');
         ribbonArrowRight.classList.add('ribbon__arrow_visible');
      }
      else if (scrollLeft > 0){
      ribbonArrowRight.classList.add('ribbon__arrow_visible');
      ribbonArrowLeft.classList.add('ribbon__arrow_visible');
      }    
  });
}
  _eventMenuClick(){
    const buttons = this.elem.querySelectorAll('.ribbon__item');
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
       const activeButton = this.elem.querySelector('.ribbon__item_active');
       activeButton.classList.remove('ribbon__item_active');
        button.classList.add('ribbon__item_active');

        const id = button.dataset.id;
        this.elem.dispatchEvent(new CustomEvent('ribbon-select', {
          detail: id,
          bubbles: true,
       }));
     });
   }); 
  }
}
 
