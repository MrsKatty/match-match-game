import Component from "../components/Component";
import abouteGame from "../components/AppComponent/AboutGamePageComponent/AboutGame";

class Router {
  public routes: {path: string, component: Component}[];

  constructor() {
    this.routes = [
      {path: '/', component: abouteGame},
    ]
  }

  // setRouteBoardSettingsPage(fragment: string) {
  //   const route: Object = {path: `board/:${fragment}/setting`, component: boardSettingsPageComponent};
  //   this.addRoute(route);
  // }
  //
  // setRouteBoardPage(fragment: string) {
  //   const route: object = {path: `board/:${fragment}`, component: boardPageComponent};
  //   this.addRoute(route);
  // }

  addRoute(route: {path: string, component: Component}) {
    this.routes.push(route);
  }

  getHash() {
    return window.location.hash.slice(1);
  }

  setHash(value: string) {
    window.location.hash = value;
  }

  // setAddingTaskPage() {
  //   this.setHash('newtask');
  // }

  setHomePage() {
    this.setHash('');
  }

  // setBoardPage(id: string) {
  //   this.setRouteBoardPage(id);
  //   let route = `board/:${id}`;
  //   this.setHash(route);
  // }

  // setBoardSettingsPage(id: string) {
  //   this.setRouteBoardSettingsPage(id);
  //   this.setHash(`board/:${id}/setting`);
  // }
}

const router = new Router();

export { router, Router };
