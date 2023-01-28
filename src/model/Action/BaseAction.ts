import IAction from "../interfaces/IAction";
import IBoard from "../interfaces/IBoard";
import { Dictionary } from "../interfaces/IDictionary";
import { IEvent } from "../interfaces/IEvent";
import IPlayer from "../interfaces/IPlayer";

export class BaseAction implements IAction {
  name: string;
  owner: IPlayer;
  parameters: Dictionary;

  constructor(player: IPlayer, parameters: Dictionary, actionName: string) {
    this.owner = player;
    this.parameters = parameters;
    this.name = actionName;
  }

  execute(board: IBoard): void {}

  getEvent() {
    return {
      type: this.name,
      ...this.parameters,
    } as IEvent;
  }
}
