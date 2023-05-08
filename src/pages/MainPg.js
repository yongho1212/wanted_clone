import Component from '../core/Component.js'
import Header from "../components/layout/Header.js";
import Slider from '../components/main/Slider.js';


export default class MainPg extends Component {
    template() {
        return `
        <header data-component="header"></header>  
        <main data-component="slider"></main>
        `
    }

    mounted(){
        const {headerItems} = this;
        const $header = this.$target.querySelector('[data-component="header"]');
        const $slider = this.$target.querySelector('[data-component="slider"]');
        new Header($header)
        new Slider($slider)
    }

    
      
      
}