

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
        container.style.backgroundColor = "red";
        this.appendChild(container)

        let txt = document.createElement('div')
        txt.classList.add('loadingImg')
        txt.innerHTML = `<img src="${this.link}">`
        container.appendChild(txt)
        console.log(this.link, this)
    }
}
customElements.define('loading-img', Loading)


