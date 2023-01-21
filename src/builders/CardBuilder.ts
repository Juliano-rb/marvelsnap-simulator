import ICard from "../model/interfaces/ICard";
import { Card } from "../model/Card";
import { randString } from "./utils";

export class CardBuilder {
  private _card: ICard;
  constructor() {
    this._card = new Card(randString(6), randString(15), 1, 1, []);
  }

  build() {
    return this._card;
  }
}
