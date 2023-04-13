

class Loading extends HTMLElement{
    
    constructor(){
        super();
        this.link = this.getAttribute('link') ? this.getAttribute('link') : ""
    }

    connectedCallback(){
        let container = document.createElement('div')
        
        container.classList.add('loadingContainer')
        container.style.position = "absolute";
        container.style.left = "50%";
        container.style.top = "50%";
        container.style.transform = "translate(-50%, -50%)";
        container.style.zIndex = "9999";
        container.style.backgroundColor = "opacity"; // 흐리게 보이는 배경

        let img = document.createElement('img'); // 이미지 태그 생성
        img.src = this.link;
        img.classList.add('loadingImg');
        img.style.animation = 'rotation 3s infinite linear'; // 3초 동안 회전하는 애니메이션

        container.appendChild(img);
        this.appendChild(container);

        // 3초 후 로딩 이미지 제거
        setTimeout(() => {
            container.style.display = 'none';
        }, 3000);
        
        // this.appendChild(container)

        // let txt = document.createElement('div')
        // txt.classList.add('loadingImg')
        // txt.innerHTML = `<img src="${this.link}">`
        // container.appendChild(txt)
        // txt.style.transform = 'rotate(720deg)'
        // console.log(this.link, this)
    }
}
customElements.define('loading-img', Loading)


