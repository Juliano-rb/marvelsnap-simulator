import IBoard from "../interfaces/IBoard";
import ICard from "../interfaces/ICard";
import { Dictionary } from "../interfaces/IDictionary";
import IPlayer from "../interfaces/IPlayer";
import { BaseAction } from "./BaseAction";

interface PlaceCardParameters extends Dictionary {
  card: ICard;
  locationIndex: number;
}

export class PlaceCardAction extends BaseAction {
  constructor(player: IPlayer, parameters: PlaceCardParameters) {
    super(player, parameters, "Place Card");
  }

  execute(board: IBoard): void {
    const location = board.locations[this.parameters.locationIndex];
    location.cards.push(this.parameters.card);
  }
}
