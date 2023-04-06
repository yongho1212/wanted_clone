

const slide = document.querySelector(".slideContainer")
const slideItems = document.querySelectorAll(".slideContainer .slide-item");
let slideWidth = slide.clientWidth;
let arrWidth = slideItems[0].clientWidth
let arrMargin = arrWidth/40

const nxtBtn = document.querySelector(".nxtBtn")
const prevBtn = document.querySelector(".prevBtn")

const maxSlide = slideItems.length

// 현재 슬라이드 인덱스
let currSlide = 1;

const startSlide = slideItems[0]
const endSlide = slideItems[maxSlide - 1]
const startElem = document.createElement("div");
const endElem = document.createElement("div");

makeClone();
console.log(arrWidth, arrMargin)

function makeClone(){
  for ( let i = 0; i< maxSlide; i++){
    let cloneSlide = slideItems[i].cloneNode(true)
    cloneSlide.classList.add('clone')
    slide.appendChild(cloneSlide)
  }
  for ( let j = maxSlide -1 ; j>=0; j--){
    let cloneSlide = slideItems[j].cloneNode(true)
    cloneSlide.classList.add('clone')
    slide.prepend(cloneSlide)
  }
  updateWidth();
  setInitialPos();
}



function updateWidth(){
  let currSlides = slideItems
  let newSlideCnt = currSlides.length

  let newWidth = (arrWidth + arrMargin)*newSlideCnt - arrMargin + "px";
  slide.style.width = newWidth
  console.log(newWidth)
}

function setInitialPos(){
  let initialTransLateValue = -(arrWidth + arrMargin)*(maxSlide+2) 
  slide.style.transform = 'translateX(' +initialTransLateValue+'px)'
  console.log(initialTransLateValue)
}