// window.onload = function(){
//     var slides = document.getElementsByClassName('carousel-item'),
//         addActive = function(slide) {slide.classList.add('active')},
//         removeActive = function(slide) {slide.classList.remove('active')};
//     addActive(slides[0]);
    
//     setInterval(function (){
//       for (var i = 0; i < slides.length; i++){
//         if (i + 1 == slides.length) {
//           addActive(slides[0]);
//           slides[0].style.zIndex = 100;
//           setTimeout(removeActive, 350, slides[i]); //Doesn't be worked in IE-9
//           break;
//         }
//         if (slides[i].classList.contains('active')) { 
//           slides[i].removeAttribute('style');
//           setTimeout(removeActive, 350, slides[i]); //Doesn't be worked in IE-9
//           addActive(slides[i + 1]);
//           break;
//         }
//       } 
//     }, 4000);
//   }

(function () {
    "use strict";
  
    var carousel = document.getElementsByClassName("carousel")[0],
      slider = carousel.getElementsByClassName("carousel__slider")[0],
      items = carousel.getElementsByClassName("carousel__slider__item"),
      prevBtn = carousel.getElementsByClassName("carousel__prev")[0],
      nextBtn = carousel.getElementsByClassName("carousel__next")[0];
  
    var width,
      height,
      totalWidth,
      margin = 20,
      currIndex = 0,
      interval,
      intervalTime = 4000;
  
    function init() {
      resize();
      move(Math.floor(items.length / 2));
      bindEvents();
  
      timer();
    }
  
    function resize() {
      (width = Math.max(window.innerWidth * 0.25, 275)),
        (height = window.innerHeight * 0.5),
        (totalWidth = width * items.length);
  
      slider.style.width = totalWidth + "px";
  
      for (var i = 0; i < items.length; i++) {
        let item = items[i];
        item.style.width = width - margin * 2 + "px";
        item.style.height = height + "px";
      }
    }
  
    function move(index) {
      if (index < 1) index = items.length;
      if (index > items.length) index = 1;
      currIndex = index;
  
      for (var i = 0; i < items.length; i++) {
        let item = items[i],
          box = item.getElementsByClassName("item__3d-frame")[0];
        if (i == index - 1) {
          item.classList.add("carousel__slider__item--active");
          box.style.transform = "perspective(1200px)";
        } else {
          item.classList.remove("carousel__slider__item--active");
          box.style.transform =
            "perspective(1200px) rotateY(" + (i < index - 1 ? 40 : -40) + "deg)";
        }
      }
  
      slider.style.transform =
        "translate3d(" +
        (index * -width + width / 2 + window.innerWidth / 2) +
        "px, 0, 0)";
    }
  
    function timer() {
      clearInterval(interval);
      interval = setInterval(() => {
        move(++currIndex);
      }, intervalTime);
    }
  
    function prev() {
      move(--currIndex);
      timer();
    }
  
    function next() {
      move(++currIndex);
      timer();
    }
  
    function bindEvents() {
      window.onresize = resize;
      prevBtn.addEventListener("click", () => {
        prev();
      });
      nextBtn.addEventListener("click", () => {
        next();
      });
    }
  
    init();
  })();
  