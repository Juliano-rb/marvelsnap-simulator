import { Trigger } from "../model/Trigger";
import IAction from "../model/interfaces/IAction";
import { BaseActionBuilder } from "./BaseActionBuilder";
import { IEvent } from "../model/interfaces/IEvent";

export class TriggerBuilder {
  private readonly _trigger: Trigger;
  constructor() {
    const action = new BaseActionBuilder().build();
    const interestedEvent = {};

    this._trigger = new Trigger(action, interestedEvent);
  }

  withInterestedEvent(event: IEvent) {
    this._trigger.interestedEvent = event;
    return this;
  }

  withAction(action: IAction) {
    this._trigger.action = action;
    return this;
  }

  build() {
    return this._trigger;
  }
}
