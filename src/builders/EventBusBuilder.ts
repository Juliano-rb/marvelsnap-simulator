import { BoardBuilder } from "./BoardBuilder";
import { EventBus } from "../model/EventBus";
import { Board } from "../model/Board";

export class EventBusBuilder {
  private readonly _eventBus: EventBus;
  constructor() {
    const board = new BoardBuilder().build();

    this._eventBus = new EventBus(board);
  }

  withBoard(board: Board) {
    this._eventBus.board = board;
    return this;
  }

  build() {
    return this._eventBus;
  }
}
