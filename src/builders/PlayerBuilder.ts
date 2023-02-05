import { Player } from "../model/Player";

export class PlayerBuilder {
  private readonly _player: Player;
  constructor() {
    const playerName = "Player " + Math.floor(Math.random() * 100);

    this._player = new Player(playerName, {});
  }

  build() {
    return this._player;
  }
}
