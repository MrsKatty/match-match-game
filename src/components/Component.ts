import ComponentOptions from '../interfaces/componentOptions';
import HangEvents from "../interfaces/hangEvents";

export default class Component {
  readonly element: string;
  private readonly nestedElements: Component[];
  private insertElement: string;
  private events: HangEvents[];

  constructor(options: ComponentOptions) {
    this.element = options.rootElement;
    this.nestedElements = options.nestedElements;
    this.insertElement = '';
    this.events = [];
  }

  setTemplate(template: string) {
    this.insertElement = template;
  }

  setEvents(events: HangEvents[]) {
    this.events = events;
  }

  hangEventHandlers(events: HangEvents[]) {
    if(!events.length) return;

    events.forEach(event => {
      const element = document.querySelector(event.element);

      if(element) {
        element.addEventListener(`${event.type}`, event.handler)
      }
    });
  }

  render() {
    const rootElement = document.querySelector(this.element);

    if(rootElement) {
      rootElement.insertAdjacentHTML('beforeend', this.insertElement);

      if(!this.nestedElements.length) {
        this.nestedElements.forEach((element) => {
          element.render();
        });
      }
    }

    this.hangEventHandlers(this.events);
  }
}
