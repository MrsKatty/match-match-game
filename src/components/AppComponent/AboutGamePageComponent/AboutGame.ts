import Component from "../../Component";
import ComponentOptions from "../../../interfaces/componentOptions";

import './about-game.scss';

class AboutGame extends Component {
  constructor(options: ComponentOptions) {
    super(options);
    this.setTemplate(this.getTemplate());
  }

  getTemplate() {
    return `
      <div class="centered-content-container">
        <div class="about-game">
          <h1 class="about-game__title">How to play?</h1>

          <div class="about-game__item">
            <div class="about-game__step game-step">
              <div class="game-step__number">1</div>

              <div class="game-step__text">
                Register new player in game
              </div>
            </div>

            <img class="about-game__info game-info" src='./assets/images/game-step-1.jpg'>
          </div>

          <div class="about-game__item">
            <div class="about-game__step game-step">
              <div class="game-step__number">2</div>

              <div class="game-step__text">
                Configure your game settings
              </div>
            </div>

            <img class="about-game__info game-info game-info--flex" src='./assets/images/game-step-2.jpg'>
          </div>

          <div class="about-game__item">
            <div class="about-game__step game-step">
              <div class="game-step__number">3</div>

              <div class="game-step__text">
                Start you new game! Remember card positions and match it before times up.
              </div>
            </div>

            <img class="about-game__info game-info" src='./assets/images/game-step-3.jpg'>
          </div>
        </div>
      </div>`;
  }
}

const abouteGame = new AboutGame({
  rootElement: '.about-wrapper',
  nestedElements: []
});

export default abouteGame;
