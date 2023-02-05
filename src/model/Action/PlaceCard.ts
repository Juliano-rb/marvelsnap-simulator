import { Board } from "../Board";
import { Card } from "../Card";
import { Dictionary } from "../interfaces/IDictionary";
import { Player } from "../Player";
import { BaseAction } from "./BaseAction";

interface PlaceCardParameters extends Dictionary {
  card: Card;
  locationIndex: number;
}

export class PlaceCardAction extends BaseAction {
  constructor(player: Player, parameters: PlaceCardParameters) {
    super(player, parameters, "Place Card");
  }

  execute(board: Board): void {
    const location = board.locations[this.parameters.locationIndex];
    location.cards.push(this.parameters.card);
  }
}
