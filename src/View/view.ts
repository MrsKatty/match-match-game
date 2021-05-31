import Component from "../components/Component";
import appComponent from "../components/AppComponent/AppComponent";
import viewOptions from "../interfaces/viewOptions";
import { router, Router } from "../routing/Router";
import headerComponent from "../components/AppComponent/HeaderComponent/HeaderComponent";
import abouteGame from "../components/AppComponent/AboutGamePageComponent/AboutGame";

class View {
  private readonly components: Component[];
  private readonly router: Router

  constructor(options: viewOptions) {
    this.components = options.components;
    this.router = router;
  }

  init() {
    this.initComponents();
    this.initRoutes();
  }

  initComponents() {
    this.components.forEach((component) => {
      component.render();
    });
  }

  initRoutes() {
    window.addEventListener('hashchange', this.routeHandler.bind(this));
  }

  routeHandler(e: Event) {
    const hash = this.router.getHash();
    console.log(1);

    const route = this.router.routes.find(route => {
      if (route.path === hash) {
        return route;
      }
    });

    if(route) {
      const app = document.querySelector('.app');
      console.log(app)

      if(!app) return;

      app.innerHTML = `
        <div class="${route.component.element}"></div>
      `;

      route.component.render();
    }
  }
}

const view = new View({
  components: [
    appComponent,
    headerComponent,
    abouteGame
  ]
});

export default view;
