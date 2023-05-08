import Component from "./core/Component.js";
import MainPg from "./pages/MainPg.js";
import Header from "./components/layout/Header.js";

export default class App extends Component {
  
  setup(){

  }
  template() {
    return `<div data-component="main-item"></div>`;
  }

  mounted () {
    const $mainPage = this.$target.querySelector('[data-component="main-item"]');

    new MainPg($mainPage);
  }

  
}




