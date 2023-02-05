import { Board } from "../model/Board";
import { PlayerBuilder } from "./PlayerBuilder";
import { LocationBuilder } from "./LocationBuilder";
import { Player } from "../model/Player";
import { Location } from "../model/Location";

export class BoardBuilder {
  private readonly _board: Board;
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

  withPlayers(players: Player[]) {
    this._board.players = players;
    return this;
  }

  build() {
    return this._board;
  }
}
