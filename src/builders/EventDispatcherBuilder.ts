import IBoard from "../model/interfaces/IBoard";
import { BoardBuilder } from "./BoardBuilder";
import { EventDispatcher } from "../model/EventDispatcher";

export class EventDispatcherBuilder {
  private readonly _eventDispatcher: EventDispatcher;
  constructor() {
    const board = new BoardBuilder().build();

    this._eventDispatcher = new EventDispatcher(board);
  }

  withBoard(board: IBoard) {
    this._eventDispatcher.board = board;
    return this;
  }

  build() {
    return this._eventDispatcher;
  }
}
