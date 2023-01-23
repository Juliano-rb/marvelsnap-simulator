import IBoard from "./interfaces/IBoard";
import IEventDispatcher from "./interfaces/IEventDispatcher";
import ITrigger from "./interfaces/ITrigger";

export class EventDispatcher implements IEventDispatcher {
  triggers: ITrigger[];
  board: IBoard;

  constructor(board: IBoard) {
    this.board = board;
    this.triggers = [];
  }

  registerTrigger(trigger: ITrigger): void {
    console.log("registering trigger");
    this.triggers.push(trigger);
    this.checkTriggers();
  }
  removeTrigger(trigger: ITrigger): void {
    const removingIndex = this.triggers.indexOf(trigger);
    this.triggers.splice(removingIndex, 1);
    this.checkTriggers();
  }
  checkTriggers(): void {
    this.triggers.forEach((trigger) => {
      if (trigger.check(this.board)) {
        trigger.action.execute(this.board, {});

        this.removeTrigger(trigger);
      }
    });
  }
}
