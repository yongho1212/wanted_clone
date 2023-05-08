
import Component from "../../core/Component.js";

export default class Slider extends Component {
  
    // setup() {
    //     this.state = {
    //       slideCnt: 0
    //     }
    //   }

  template() {
    return `
        <div class="slide_wrapper">
        <ul class="slides">
                    <li><a>
                        <div class="slImgContainer">
                            <img 
                                src="../../src/assets/slides/s1.png"
                                class="slImgItem"
                                >
                            <div class="slTxtContainer">
                                <div class="slRxtFirstRow">
                                    <h3>
                                        우리 회사를 소개합니다.
                                    </h3>
                                    <h4>
                                        회사에 대한 정보 원티드가 찾아드릴게요
                                    </h4>
                                </div>
                                <!-- <hr class="hrhr"> -->
                                <div class="slRxtSecondRow">
                                    바로가기 >
                                </div>
                            </div>
                        </div>
                    </a></li>
                    <li><a>
                        <div class="slImgContainer">
                            <img 
                            src="../../src/assets/slides/s2.png"
                                class="slImgItem"
                                >
                            <div class="slTxtContainer">
                                <div class="slRxtFirstRow">
                                    <h3>
                                        우리 회사를 소개합니다.
                                    </h3>
                                    <h4>
                                        회사에 대한 정보 원티드가 찾아드릴게요
                                    </h4>
                                </div>
                                <!-- <hr class="hrhr"> -->
                                <div class="slRxtSecondRow">
                                    바로가기 >
                                </div>
                            </div>
                        </div>
                    </a></li>
                    <li><a>
                        <div class="slImgContainer">
                            <img 
                            src="../../src/assets/slides/s3.png"
                                class="slImgItem"
                                >
                            <div class="slTxtContainer">
                                <div class="slRxtFirstRow">
                                    <h3>
                                        우리 회사를 소개합니다.
                                    </h3>
                                    <h4>
                                        회사에 대한 정보 원티드가 찾아드릴게요
                                    </h4>
                                </div>
                                <!-- <hr class="hrhr"> -->
                                <div class="slRxtSecondRow">
                                    바로가기 >
                                </div>
                            </div>
                        </div>
                    </a></li>
                    <li><a>
                        <div class="slImgContainer">
                            <img 
                                src="../../src/assets/slides/s4.png"
                                class="slImgItem"
                                >
                            <div class="slTxtContainer">
                                <div class="slRxtFirstRow">
                                    <h3>
                                        우리 회사를 소개합니다.
                                    </h3>
                                    <h4>
                                        회사에 대한 정보 원티드가 찾아드릴게요
                                    </h4>
                                </div>
                                <!-- <hr class="hrhr"> -->
                                <div class="slRxtSecondRow">
                                    바로가기 >
                                </div>
                            </div>
                        </div>
                    </a></li>
                    <li><a>
                        <div class="slImgContainer">
                            <img 
                            src="../../src/assets/slides/s5.png"
                                class="slImgItem"
                                >
                            <div class="slTxtContainer">
                                <div class="slRxtFirstRow">
                                    <h3>
                                        우리 회사를 소개합니다.
                                    </h3>
                                    <h4>
                                        회사에 대한 정보 원티드가 찾아드릴게요
                                    </h4>
                                </div>
                                <!-- <hr class="hrhr"> -->
                                <div class="slRxtSecondRow">
                                    바로가기 >
                                </div>
                            </div>
                        </div>
                    </a></li>
                </ul>
                <div class="prev"><</div>
                <div class="next">></div>
                </div>
        `;
  }

  

  mounted() {
    
    this.slide = this.$target.querySelectorAll(".slides li");
    this.slides = this.$target.querySelector(".slides");
    this.slideCnt = this.slide.length;
    this.slideWidth = 200;
    this.slideMargin = 30;
    this.currIdx = 0
    
    this.makeClone();
    this.setEvent();
    this.moveSilde(this.slideCnt);
    let _this = this
    // setInterval(function(){
    //     _this.moveSilde(this.currIdx + 1); 
    //   },4000)
    
  }

  makeClone() {
    console.log(this.slideCnt);
    for (let i = 0; i < this.slideCnt; i++) {
      let cloneSlide = this.slide[i].cloneNode(true);
      console.log(cloneSlide);
      cloneSlide.classList.add("clone");
      this.slides.appendChild(cloneSlide);
    }
    for (let j = this.slideCnt - 1; j >= 0; j--) {
      let cloneSlide = this.slide[j].cloneNode(true);
      cloneSlide.classList.add("clone");
      this.slides.prepend(cloneSlide);
    }
    this.updateWidth();
    this.setInitialPos();
    let _this = this
    setTimeout(function () {
        _this.slides.classList.add("animated");
    }, 100);
    
  }

  updateWidth() {
    console.log(window.innerWidth);
    let slWidth = window.innerWidth * 0.7;
    console.log(slWidth);
    let currSlides = document.querySelectorAll(".slides li");
    let newSlideCnt = currSlides.length;

    let newWidth = (slWidth + this.slideMargin) * newSlideCnt - this.slideMargin + "px";
    
    this.slides.style.width = newWidth;
    
  }

  setInitialPos() {
    let slWidth = window.innerWidth * 0.7;
    let lefted = window.innerWidth * 0.15;
    // margin 뺌
    let initialTransLateValue = -(slWidth + lefted) * this.slideCnt + this.slideMargin * 2;
    this.slides.style.transform = "translateX(" + initialTransLateValue + "px)";
  }

  prevBtn(){

  }

  nextBtn(){

  }

  

  setEvent() {
    this.addEvent("click", ".prev", ({}) => {
        
        this.moveSilde(this.currIdx - 1);
        console.log(this.currIdx);
    });

    this.addEvent("click", ".next", ({}) => {
        // const currIdx = this.slideCnt;
        this.moveSilde(this.currIdx + 1);
        console.log(this.currIdx);
        
    });
    }

    moveSilde(num){
        let slWidth = window.innerWidth*0.7
        let lefted = window.innerWidth*0.15
        let _this = this
        this.slides.style.left = -num * (slWidth + this.slideMargin)+'px';
        
        this.currIdx = num;
        if(this.currIdx == this.slideCnt || this.currIdx == -this.slideCnt){
          setTimeout(function(){
            _this.slides.classList.remove('animated')
            _this.slides.style.left = '0px'
            _this.currIdx = 0;
          },500)
          setTimeout(function(){
            _this.slides.classList.add('animated')
          },600)
          
        }
      }

}
