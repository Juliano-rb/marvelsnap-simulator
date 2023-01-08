import { Board } from "../domain/Board";
import IBoard from "../domain/interfaces/IBoard";
import { Player } from "../domain/Player";
import { Location } from "../domain/Location";
import IPlayer from "../domain/interfaces/IPlayer";

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
