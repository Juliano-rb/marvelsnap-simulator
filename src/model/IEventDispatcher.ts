import IAction from "./interfaces/IAction";
import IBoard from "./interfaces/IBoard";
import IEventDispatcher from "./interfaces/IEventDispatcher";
import ITrigger from "./interfaces/ITrigger";

export class EventDispatcher implements IEventDispatcher {
  triggers: ITrigger[];

  constructor() {
    this.triggers = [];
  }

  registerTrigger(trigger: ITrigger): void {
    this.triggers.push(trigger);
  }
  removeTrigger(trigger: ITrigger): void {
    const removingIndex = this.triggers.indexOf(trigger);
    this.triggers.splice(removingIndex, 1);
  }
  checkTriggers(board: IBoard): void {
    this.triggers.forEach((trigger) => {
      if (trigger.check(board)) trigger.action.execute(board, {});
    });
  }
}
