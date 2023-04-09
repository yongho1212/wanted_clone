

let slides = document.querySelector('.themeWrapperContainer')
let slide = document.querySelectorAll('themeSelectBox');
let currIdx = 0
let slideCnt = slide.length
let slideWidth = 200
let slideMargin = 30
let nxtBtn = document.querySelector("#rightSlideBtn")
let prevBtn = document.querySelector(".prev")


makeClone();
console.log(window.innerWidth )

function makeClone(){
  
  for ( let i = 0; i< slideCnt; i++){
    let cloneSlide = slide[i].cloneNode(true)
    cloneSlide.classList.add('clone')
    slides.appendChild(cloneSlide)
  }
  for ( let j = slideCnt -1 ; j>=0; j--){
    let cloneSlide = slide[j].cloneNode(true)
    cloneSlide.classList.add('clone')
    slides.prepend(cloneSlide)
  }
  updateWidth();
  setInitialPos();
  setTimeout(function(){
    slides.classList.add('animated')
  },100)
  
}



function updateWidth(){
  console.log(window.innerWidth )
  let slWidth = window.innerWidth*0.7
  console.log(slWidth)
  let currSlides = document.querySelectorAll('.slides li')
  let newSlideCnt = currSlides.length;

  let newWidth = (slWidth + slideMargin)*newSlideCnt - slideMargin + "px";
  slides.style.width = newWidth
  console.log(newWidth)
}

function setInitialPos(){
  let slWidth = window.innerWidth*0.7
  let lefted = window.innerWidth*0.15
  // margin 뺌
  let initialTransLateValue = -(slWidth + lefted) * slideCnt +slideMargin*2
  slides.style.transform = 'translateX(' +initialTransLateValue+'px)'
  console.log(initialTransLateValue)
}

nxtBtn.addEventListener('click', function(){
  moveSilde(currIdx + 1);  
})

prevBtn.addEventListener('click', function(){
  moveSilde(currIdx - 1);  
})

function moveSilde(num){
  let slWidth = window.innerWidth*0.7
  let lefted = window.innerWidth*0.15
  slides.style.left = -num * (slWidth + slideMargin)+'px';
  currIdx = num;
  if(currIdx == slideCnt || currIdx == -slideCnt){
    setTimeout(function(){
      slides.classList.remove('animated')
      slides.style.left = '0px'
      currIdx = 0;
    },500)
    setTimeout(function(){
      slides.classList.add('animated')
    },600)
    
  }
}