// import { Component } from '../../../Component';
// import './card.scss';
//
// const FLIP_CLASS = 'flipped';
//
// export class Card extends Component {
//   isFlipped = false;
//
//   constructor(readonly image: string) {
//     super('div', ['сard-container']);
//     this.element.innerHTML = `
//       <div class="card">
//         <div class="card__front" style="background-image: url('./images/${image}')"></div>
//         <div class="card__back">Back</div>
//       </div>
//     `;
//   }
//
//   flipToBack() {
//     this.isFlipped = true;
//     return this.flip(true);
//   }
//
//   flipToFront() {
//     this.isFlipped = false;
//     return this.flip();
//   }
//
//   private flip(isFront = false): Promise<void> {
//     return new Promise((resolve) => {
//       this.element.classList.toggle(FLIP_CLASS, isFront);
//       this.element.addEventListener('transitionend', () => resolve(), {
//         once: true,
//       });
//     });
//   }
// }
