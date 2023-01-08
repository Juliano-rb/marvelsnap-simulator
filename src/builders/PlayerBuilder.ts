import { Board } from "../model/Board";
import IBoard from "../model/interfaces/IBoard";
import { Player } from "../model/Player";
import { Location } from "../model/Location";
import IPlayer from "../model/interfaces/IPlayer";

export class PlayerBuilder {
  private readonly _player: IPlayer;
  constructor() {
    const playerName = "Player " + Math.floor(Math.random() * 100);

    this._player = new Player(playerName, {});
  }

  build() {
    return this._player;
  }
}
