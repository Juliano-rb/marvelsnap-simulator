import { Board } from "../Board";
import IAction from "../interfaces/IAction";
import { Dictionary } from "../interfaces/IDictionary";
import { IEvent } from "../interfaces/IEvent";
import { Player } from "../Player";

export class BaseAction implements IAction {
  name: string;
  owner: Player;
  parameters: Dictionary;

  constructor(player: Player, parameters: Dictionary, actionName: string) {
    this.owner = player;
    this.parameters = parameters;
    this.name = actionName;
  }

  execute(board: Board): void {}

  getEvent() {
    return {
      type: this.name,
      ...this.parameters,
    } as IEvent;
  }
}
