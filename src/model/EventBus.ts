import { Board } from "./Board";
import IAction from "./interfaces/IAction";
import { IEvent, IEventAllFields } from "./interfaces/IEvent";
import { Trigger } from "./Trigger";

export class EventBus {
  triggers: Trigger[];
  board: Board;
  events: IEvent[];

  constructor(board: Board) {
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
