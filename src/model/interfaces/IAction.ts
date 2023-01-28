import IBoard from "./IBoard";
import { Dictionary } from "./IDictionary";
import { IEvent } from "./IEvent";
import IPlayer from "./IPlayer";

export default interface IAction {
  name: string;
  owner: IPlayer;
  parameters: Dictionary;

  execute(board: IBoard): void;
  getEvent(): IEvent;
}
