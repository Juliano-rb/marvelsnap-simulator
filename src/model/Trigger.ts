import IAction from "./interfaces/IAction";
import IBaseCondition from "./interfaces/IBaseCondition";
import IBoard from "./interfaces/IBoard";
import { Dictionary } from "./interfaces/IDictionary";
import ITrigger from "./interfaces/ITrigger";

/**
 * Implementar triggers diferentes baseados nesta itnerface, esse aqui é só a baes eu acho
 */
export class Trigger implements ITrigger {
  baseCondition?: IBaseCondition;
  action: IAction;
  parameters: Dictionary;

  constructor(
    action: IAction,
    parameters: Dictionary,
    baseCondition?: IBaseCondition
  ) {
    this.baseCondition = baseCondition;
    this.action = action;
    this.parameters = parameters;
  }
  check(board: IBoard): boolean {
    if (!this.baseCondition) return true;

    return this.baseCondition.checkCondition(board, this.parameters);
  }
}
