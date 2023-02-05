import { Card } from "../model/Card";
import { randString } from "./utils";

export class CardBuilder {
  private _card: Card;
  constructor() {
    this._card = new Card(randString(6), randString(15), 1, 1, []);
  }

  build() {
    return this._card;
  }
}
