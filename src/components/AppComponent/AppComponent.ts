import Component from "../Component";
import ComponentOptions from "../../interfaces/componentOptions";
import './app.scss';

import ImageCategory from '../../interfaces/img-category-model';

class AppComponent extends Component{
  constructor(options: ComponentOptions) {
    super(options);
    this.setTemplate(this.getTemplate());
  }

  getTemplate() {
    return `
      <div class="header-wrapper"></div>
      <div class="app">
         <div class="about-wrapper"></div>
      </div>
    `;
  }

  // async start() {
  //   const res = await fetch('./images.json');
  //   const categories: ImageCategory[] = await res.json();
  //   const cat = categories[0];
  //   const images = categories[0].images.map((name) => `${cat.category}/${name}`);
  //   this.game.newGame(images);
  // }
}
const appComponent = new AppComponent({
  rootElement: '#root',
  nestedElements: []
});

export default appComponent;
