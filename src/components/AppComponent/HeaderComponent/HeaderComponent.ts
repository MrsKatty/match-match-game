import Component from "../../Component";
import ComponentOptions from "../../../interfaces/componentOptions";

import './header.scss';

class HeaderComponent extends Component {
  constructor(options: ComponentOptions) {
    super(options);
    this.setTemplate(this.getTemplate());
    this.setEvents(this.getEvents());
  }

  getEvents() {
    return [
      {element: '.nav-link', type: 'click', handler: this.onClick.bind(this)}
    ]
  }

  onClick(e: Event) {
    e.preventDefault()
    console.log(1)
  }

  getTemplate() {
    return `
      <header class="header">
         <div class="header__centered-container">
           <div class="header__container">
            <div class="header__logo">
              <img src="./assets/icons/Group 1.svg" alt="" />
            </div>
            <nav class="header__nav nav">
              <a href='/' class="nav-link">
                <img src="./assets/icons/Group 2.svg" alt="" class="logo" />
                About Game
              </a>
              <a class="nav-icon">
                <img src="./assets/icons/Vector.svg" alt="" class="logo" />
                Best Score
              </a>
              <a class="nav-setting">
                <img src="./assets/icons/stars.svg" alt="" class="logo" />
                Game Settings
              </a>
            </nav>
          </div>
          <div class="header__container-logo">
            <button class="header__buttton">START GAME</button>
            <img src="./assets/icons/01.svg" alt="" />
          </div>
         </div>
      </header>`
  }
}

const headerComponent = new HeaderComponent({
  rootElement: '.header-wrapper',
  nestedElements: []
});

export default headerComponent;
