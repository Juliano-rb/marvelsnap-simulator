import IAction from "../model/interfaces/IAction";
import { PlayerBuilder } from "./PlayerBuilder";
import { BaseAction } from "../model/Action/BaseAction";

export class BaseActionBuilder {
  private _action: IAction;
  constructor() {
    const player = new PlayerBuilder().build();
    this._action = new BaseAction(player, {}, "");
  }

  withName(name: string) {
    this._action.name = name;
    return this;
  }

  build() {
    return this._action;
  }
}
