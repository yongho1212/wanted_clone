

let slides = document.querySelector('.slides')
let slide = document.querySelectorAll('.slides li');
let currIdx = 0
let slideCnt = slide.length
let slideWidth = 200
let slideMargin = 30
let nxtBtn = document.querySelector(".next")
let prevBtn = document.querySelector(".prev")
let letMainCategoryNextBtn =  document.querySelector('#rightSlideBtnMain')
let loginBtn = document.getElementById('headerAuthLogin')
let closeModal = document.getElementById('modalCloseBtn')
let signUpBtn = document.getElementById('authEmailBtn')
let signUpCloseBtn = document.getElementById('signUpCloseBtn')
let insightItms = document.querySelectorAll('.insightWrapperItem')


makeClone();

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
// 다음버튼
nxtBtn.addEventListener('click', function(){
  moveSilde(currIdx + 1);  
})

// letMainCategoryNextBtn.addEventListener('click', function(){
//   moveSilde(currIdx + 1);  
// })

// 이전버튼
prevBtn.addEventListener('click', function(){
  moveSilde(currIdx - 1);  
})

// 자동 슬라이드
setInterval(function(){
  moveSilde(currIdx + 1); 
},4000)

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

loginBtn.addEventListener('click', ()=>{
  let modalCtn = document.getElementById('modalContainer')
  let modaldp = modalCtn.style.display
  if (modaldp == '' || modaldp == 'none'){
    modalCtn.style.display = 'block'
  }
})

closeModal.addEventListener('click', () => {
  let modalCtn = document.getElementById('modalContainer')
  let modaldp = modalCtn.style.display
  if (modaldp == 'block'){
    modalCtn.style.display = 'none'
  }
})

signUpBtn.addEventListener('click', ()=>{
  let modalCtn = document.getElementById('modalContainer')
  let signUpCtn = document.getElementById('signUpModalContainer')
  modalCtn.style.display = 'none';
  signUpCtn.style.display = 'block';
})

signUpCloseBtn.addEventListener('click', () =>{
  let signUpCtn = document.getElementById('signUpModalContainer')
  let signdp = signUpCtn.style.display
  if (signdp == 'block'){
    signUpCtn.style.display = 'none'
  }
})

document.querySelectorAll('.insightWrapperItem').forEach(e => {
  e.addEventListener('mouseover', () => {
    e.style.bottom = '10px'
    
  })
});

document.querySelectorAll('.insightWrapperItem').forEach(e => {
  e.addEventListener('mouseout', () => {
    e.style.bottom = '0px'
  })
});
