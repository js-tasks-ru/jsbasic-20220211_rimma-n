import createElement from '../../assets/lib/create-element.js';
export default class Carousel {
  constructor(slides) {
    this.activeIndex = 0;
    this.slides = slides;
    this.elem = this._createCarusel();
    this._eventButtonSwitch();
    this._clickEventButtonPlus();
  }
_createEachSlide(slide){
    return  `<div class="carousel__slide" data-id=${slide.id}>
       <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
         <div class="carousel__caption">
           <span class="carousel__price">€${slide.price.toFixed(2)}</span>
              <div class="carousel__title">${slide.name}</div>
           <button type="button" class="carousel__button">
              <img src="/assets/images/icons/plus-icon.svg" alt="icon">
           </button>
         </div>
     </div>`
   };
_createCarusel() {
    let carousel = createElement(
  `<div class="carousel">
    <!--Кнопки переключения-->
    <div class="carousel__arrow carousel__arrow_right">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </div>
    <div class="carousel__arrow carousel__arrow_left">
      <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
    </div>
    <div class="carousel__inner"> ${this.slides.map(this._createEachSlide).join('')}<div/>
 </div>`);
  return carousel;
  }

_eventButtonSwitch (){
  const clickArrowRight = this.elem.querySelector(".carousel__arrow_right");
  const clickArrowLeft = this.elem.querySelector(".carousel__arrow_left");
  const carouselSlide = this.elem.querySelector('.carousel__slide');  
  const carouselInner = this.elem.querySelector(".carousel__inner");
  const slidesCollection = this.elem.querySelectorAll('.carousel__slide');  
 
  let counter = 1;
  clickArrowLeft.setAttribute("style", "display: none");
  
  this.elem.addEventListener("click", (event) => {
    const slideWidth = carouselSlide.offsetWidth;

    if (event.target.closest(".carousel__arrow_right")) {
      carouselInner.setAttribute("style",`transform: translateX(${-slideWidth * counter}px)` );
      counter++;
        if(counter>=1){ 
         clickArrowLeft.setAttribute("style", "display: ");
        }
         if (counter>= slidesCollection.length){
          clickArrowRight.setAttribute("style", "display: none");
          clickArrowLeft.removeAttribute("style");
          counter--;
        }
    }
    if (event.target.closest(".carousel__arrow_left")) {
      counter--;
      carouselInner.setAttribute("style",`transform: translateX(${-slideWidth * counter}px)` );
      if (counter===0){
        clickArrowLeft.setAttribute("style", "display: none");
      }
    }
    });
  };

_clickEventButtonPlus() {
    const buttons = this.elem.querySelectorAll('.carousel__button');
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
       const id = button.closest('.carousel__slide').dataset.id;
        this.elem.dispatchEvent(new CustomEvent("product-add", {
         detail: id,
          bubbles: true,
        }));
      });
    });
  };
};
 