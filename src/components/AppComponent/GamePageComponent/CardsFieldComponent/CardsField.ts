/*import './cards-field.scss';
import { Component } from '../../Component';
import { Card } from './CardComponent/Card';

const SHOW_TIME = 5;

export class CardsField extends Component {
  private cards: Card[] = [];

  constructor() {
    super('div', ['cards-field']);
  }

  clear() {
    this.cards = [];
    this.element.innerHTML = '';
  }

  addCards(cards: Card[]) {
    this.cards = cards;
    this.cards.forEach((card) => this.element.appendChild(card.element));
    setTimeout(() => {
      this.cards.forEach((card) => card.flipToBack());
    }, SHOW_TIME * 1000);
  }
}*/
