import { Card } from "../Card";

export default interface IDeck {
  cards: Card[];

  draw(): Card;
}
