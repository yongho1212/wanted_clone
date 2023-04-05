
     const caroItems = document.querySelectorAll('.caroItemContainer');
     const caroItemActiveClass = 'active';
 
     let activeIndex = 0;
     const changeActiveIndex = (increment) => {
       activeIndex += increment;
       if (activeIndex >= caroItems.length) {
         activeIndex = 0;
       } else if (activeIndex < 0) {
         activeIndex = caroItems.length - 1;
       }
     };
 
     const updateCarousel = () => {
       caroItems.forEach((caroItem, index) => {
         if (index === activeIndex) {
           caroItem.classList.add(caroItemActiveClass);
         } else {
           caroItem.classList.remove(caroItemActiveClass);
         }
       });
     };
 
     const prevButton = document.createElement('button');
     prevButton.textContent = 'Prev';
     prevButton.addEventListener('click', () => {
       changeActiveIndex(-1);
       updateCarousel();
     });
     const nextButton = document.createElement('button');
     nextButton.textContent = 'Next';
     nextButton.addEventListener('click', () => {
       changeActiveIndex(1);
       updateCarousel();
     });
 
     const caroArrayContainer = document.querySelector('.caroArrayContainer');
     caroArrayContainer.appendChild(prevButton);
     caroArrayContainer.appendChild(nextButton);
 
     updateCarousel();
     setInterval(() => {
       changeActiveIndex(1);
       updateCarousel();
     }, 4000);



// const caro = document.querySelector('.carousel');
// const caroArr = caro.querySelector('.carouselArrayContainer');
// const caroItem = caro.querySelectorAll('.caroItemContainer');

// const addActive = (itm) => {
//   itm.classList.add('active');
// };

// const removeActive = (itm) => {
//   itm.classList.remove('active');
// };

// const slider = () => {
//   let activeIndex = Array.from(caroItem).findIndex(item => item.classList.contains('active'));
//   removeActive(caroItem[activeIndex]);
//   caroItem[activeIndex].removeAttribute('style');
  
//   if (activeIndex === caroItem.length - 1) {
//     activeIndex = 0;
//   } else {
//     activeIndex += 1;
//   }
  
//   addActive(caroItem[activeIndex]);
//   caroItem[activeIndex].style.zIndex = 100;
// };

// window.onload = () => {
//   addActive(caroItem[0]);
//   setInterval(slider, 4000);
// };

