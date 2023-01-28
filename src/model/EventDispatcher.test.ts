import { describe, expect, it, vitest } from "vitest";
import { BaseActionBuilder } from "../builders/BaseActionBuilder";
import { BoardBuilder } from "../builders/BoardBuilder";
import { EventDispatcherBuilder } from "../builders/EventDispatcherBuilder";
import { TriggerBuilder } from "../builders/TriggerBuilder";
import { EventDispatcher } from "./EventDispatcher";
import { IEvent } from "./interfaces/IEvent";

describe("EventDispatcher", () => {
  describe("should instantiate with correct parameters", () => {
    const board = new BoardBuilder().build();
    const eventDispatcher = new EventDispatcher(board);

    it("should have the passed board parameter", () => {
      expect(eventDispatcher.board).toBe(board);
    });

    it("should have no triggers registered", () => {
      expect(eventDispatcher.triggers).toEqual([]);
    });

    it("should have no events registered", () => {
      expect(eventDispatcher.events).toEqual([]);
    });
  });

  it("should register a new trigger correctly", () => {
    const trigger = new TriggerBuilder().build();

    const eventDispatcher = new EventDispatcherBuilder().build();

    eventDispatcher.registerTrigger(trigger);
    expect(eventDispatcher.triggers).toEqual([trigger]);
  });

  it("should register a new event correctly", () => {
    const event: IEvent = {
      type: "play card",
    };
    const eventDispatcher = new EventDispatcherBuilder().build();

    eventDispatcher.dispatchEvent(event);
    expect(eventDispatcher.events).toEqual([event]);
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

    const eventDispatcher = new EventDispatcherBuilder().build();
    eventDispatcher.registerTrigger(trigger);
    eventDispatcher.executeAction(startAction);

    it("should execute trigger associated action", () => {
      expect(triggerAssociateAction.execute).toHaveBeenCalledOnce();
    });

    // dividir em dois pois a ação executada manualmente também deve executar um trigger
    it("should dispatch a event related to the triggered action", () => {
      expect(eventDispatcher.events[1]).toEqual(
        triggerAssociateAction.getEvent()
      );
    });
  });
});
