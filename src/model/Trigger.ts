import IAction from "./interfaces/IAction";
import { Dictionary } from "./interfaces/IDictionary";
import { IEvent } from "./interfaces/IEvent";

/**
 * Implementar triggers diferentes baseados nesta itnerface, esse aqui é só a baes eu acho
 */
export class Trigger {
  action: IAction;
  interestedEvent: IEvent;
  once: boolean;
  constructor(action: IAction, interestedEvent: IEvent, once = true) {
    this.action = action;
    this.interestedEvent = interestedEvent;
    this.once = once;
  }
}
