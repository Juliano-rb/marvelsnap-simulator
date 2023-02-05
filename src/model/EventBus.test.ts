import { describe, expect, it, vitest } from "vitest";
import { BaseActionBuilder } from "../builders/BaseActionBuilder";
import { BoardBuilder } from "../builders/BoardBuilder";
import { EventBusBuilder } from "../builders/EventBusBuilder";
import { TriggerBuilder } from "../builders/TriggerBuilder";
import { EventBus } from "./EventBus";
import { IEvent } from "./interfaces/IEvent";

describe("EventBus", () => {
  describe("should instantiate with correct parameters", () => {
    const board = new BoardBuilder().build();
    const eventBus = new EventBus(board);

    it("should have the passed board parameter", () => {
      expect(eventBus.board).toBe(board);
    });

    it("should have no triggers registered", () => {
      expect(eventBus.triggers).toEqual([]);
    });

    it("should have no events registered", () => {
      expect(eventBus.events).toEqual([]);
    });
  });

  it("should register a new trigger correctly", () => {
    const trigger = new TriggerBuilder().build();

    const eventBus = new EventBusBuilder().build();

    eventBus.registerTrigger(trigger);
    expect(eventBus.triggers).toEqual([trigger]);
  });

  it("should register a new event correctly", () => {
    const event: IEvent = {
      type: "play card",
    };
    const eventBus = new EventBusBuilder().build();

    eventBus.dispatchEvent(event);
    expect(eventBus.events).toEqual([event]);
  });

  describe("when execute an action with a registered trigger listening to it", () => {
    const startAction = new BaseActionBuilder().withName("startAction").build();

    const triggerAssociateAction = new BaseActionBuilder()
      .withName("associateAction")
      .build();
    vitest.spyOn(triggerAssociateAction, "execute");
    const trigger = new TriggerBuilder()
      .withInterestedEvent({ type: startAction.name })
      .withAction(triggerAssociateAction)
      .build();

    const eventBus = new EventBusBuilder().build();
    eventBus.registerTrigger(trigger);
    eventBus.executeAction(startAction);

    it("should execute trigger associated action", () => {
      expect(triggerAssociateAction.execute).toHaveBeenCalledOnce();
    });

    // dividir em dois pois a ação executada manualmente também deve executar um trigger
    it("should dispatch a event related to the triggered action", () => {
      expect(eventBus.events[1]).toEqual(triggerAssociateAction.getEvent());
    });
  });
});
