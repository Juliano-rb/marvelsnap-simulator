import { Board } from "../model/Board";
import IBoard from "../model/interfaces/IBoard";
import { PlayerBuilder } from "./PlayerBuilder";
import { LocationBuilder } from "./LocationBuilder";
import IPlayer from "../model/interfaces/IPlayer";

export class BoardBuilder {
  private readonly _board: IBoard;
  constructor() {
    const players = [new PlayerBuilder().build(), new PlayerBuilder().build()];

    const locations = [
      new LocationBuilder().build(),
      new LocationBuilder().build(),
      new LocationBuilder().build(),
    ];

    this._board = new Board(players, locations);
  }

  withLocations(locations: Location[]) {
    this._board.locations = locations;
    return this;
  }

  withPlayers(players: IPlayer[]) {
    this._board.players = players;
    return this;
  }

  build() {
    return this._board;
  }
}
