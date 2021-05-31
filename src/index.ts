import view from "./View/view";

window.onload = () => {
  const rootElement = document.getElementById('root');

  if (!rootElement) throw Error('AppComponent root element not found');
  view.init();
};
