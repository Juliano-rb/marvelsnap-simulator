import { Board } from "../Board";
import { Player } from "../Player";
import { Dictionary } from "./IDictionary";
import { IEvent } from "./IEvent";

export default interface IAction {
  name: string;
  owner: Player;
  parameters: Dictionary;

  execute(board: Board): void;
  getEvent(): IEvent;
}
