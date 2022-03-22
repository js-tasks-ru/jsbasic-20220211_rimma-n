function initCarousel(){
    //Buttons
   const carouselArrowRight = document.querySelector(".carousel__arrow_right");
   const carouselArrowLeft = document.querySelector(".carousel__arrow_left");
    // carousel  
   const carouselInner = document.querySelector(".carousel__inner");
    //images
   const img = carouselInner.querySelectorAll('.carousel__img');
   const slideWidth = carouselInner.offsetWidth; 
    //counter
   let counter = 0;  
    carouselArrowLeft.style.display = 'none'; 
    carouselArrowRight.addEventListener('click', () => { 
		if (counter >= img.length-2) carouselArrowRight.style.display = 'none';
	    carouselArrowLeft.style.display = '';
	    counter++;
		carouselInner.setAttribute("style",`transform: translateX(${-slideWidth * counter}px)`)	 
    })
	carouselArrowLeft.addEventListener('click', () => {
		carouselArrowRight.style.display = '';
		if (counter===1) carouselArrowLeft.style.display = 'none';
		counter--;
		carouselInner.setAttribute("style",`transform: translateX(${-slideWidth * counter}px)`)
	})
}
