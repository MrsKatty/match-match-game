/*import { delay } from '../../shared/delay';
import { Component } from '../Component';
import { Card } from './CardsFieldComponent/CardComponent/Card';
import { CardsField } from './CardsFieldComponent/CardsField';
import { AboutGame } from '../AboutGamePageComponent/AboutGame';

const FLIP_DELAY = 3000;

export class Game extends Component {
  private readonly cardsField: CardsField;

  private readonly aboutGamePage: AboutGame;

  private activeCard?: Card;

  private isAnimation = false;

  constructor() {
    super();
    this.cardsField = new CardsField();
    this.aboutGamePage = new AboutGame();
    // this.element.appendChild(this.cardsField.element);
    this.element.appendChild(this.aboutGamePage.element);
  }

  newGame(images: string[]) {
    this.cardsField.clear();
    const cards = images
      .concat(images)
      .map((url) => new Card(url))
      .sort(() => Math.random() - 0.5);

    cards.forEach((card) => {
      card.element.addEventListener('click', () => this.cardHandler(card));
    });

    this.cardsField.addCards(cards);
  }

  private async cardHandler(card: Card) {
    if (this.isAnimation) return;
    if (!card.isFlipped) return;
    this.isAnimation = true;
    await card.flipToFront();

    if (!this.activeCard) {
      this.activeCard = card;
      this.isAnimation = false;
      return;
    }

    if (this.activeCard!.image !== card.image) {
      await delay(FLIP_DELAY);
      await Promise.all([this.activeCard!.flipToBack(), card.flipToBack()]);
    }

    this.activeCard = undefined;
    this.isAnimation = false;
  }
}*/
