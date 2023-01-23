import IAction from "../interfaces/IAction";
import IBoard from "../interfaces/IBoard";
import ICard from "../interfaces/ICard";
import { Dictionary } from "../interfaces/IDictionary";
import IPlayer from "../interfaces/IPlayer";

interface PlaceCardParameters extends Dictionary {
  card: ICard;
  locationIndex: number;
}

export class PlaceCardAction implements IAction {
  name: string;
  owner: IPlayer;
  parameters: Dictionary;

  constructor(player: IPlayer, parameters: PlaceCardParameters) {
    this.owner = player;
    this.parameters = parameters;
    this.name = "Place Card";
  }

  execute(board: IBoard): void {
    const location = board.locations[this.parameters.locationIndex];
    location.cards.push(this.parameters.card);
  }
}
