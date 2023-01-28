import IAction from "./interfaces/IAction";
import IBoard from "./interfaces/IBoard";
import { IEvent, IEventAllFields } from "./interfaces/IEvent";
import { Trigger } from "./Trigger";

export class EventDispatcher {
  triggers: Trigger[];
  board: IBoard;
  events: IEvent[];

  constructor(board: IBoard) {
    this.board = board;
    this.triggers = [];
    this.events = [];
  }

  registerTrigger(trigger: Trigger): void {
    this.triggers.push(trigger);
  }

  removeTrigger(trigger: Trigger): void {
    const removingIndex = this.triggers.indexOf(trigger);
    this.triggers.splice(removingIndex, 1);
  }

  #eventMatchTrigger(triggerEvent: IEvent, occuredEvent: IEvent) {
    const triggerKeys = Object.keys(triggerEvent);
    for (const atribute of triggerKeys) {
      let key = atribute as keyof IEventAllFields;
      if (occuredEvent[key] !== triggerEvent[key]) return false;
    }

    return true;
  }

  dispatchEvent(event: IEvent) {
    this.events.push(event);

    this.triggers.forEach((trigger) => {
      if (this.#eventMatchTrigger(trigger.interestedEvent, event)) {
        this.executeAction(trigger.action);
        if (trigger.once) {
          this.removeTrigger(trigger);
        }
      }
    });
  }

  executeAction(action: IAction) {
    action.execute(this.board);
    this.dispatchEvent(action.getEvent());
  }
}
