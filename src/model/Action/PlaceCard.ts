import IAction, { Dictionary } from "../interfaces/IAction";
import IBoard from "../interfaces/IBoard";
import ICard from "../interfaces/ICard";

interface PlaceCardParameters extends Dictionary {
  card: ICard;
}

export class PlaceCardAction implements IAction {
  name: string;

  constructor(name: string) {
    this.name = "Place Card";
  }

  execute(board: IBoard, parameters: Dictionary): void {
    board.playCard(board.players[0], board);
  }
}
