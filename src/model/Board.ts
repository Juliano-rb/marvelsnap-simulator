import IAction from "./interfaces/IAction";
import IBoard from "./interfaces/IBoard";
import ILocation from "./interfaces/ILocation";
import IPlayer from "./interfaces/IPlayer";

export class Board implements IBoard {
  players: IPlayer[];
  turnOf: IPlayer;
  locations: ILocation[];

  constructor(players: IPlayer[], locations: ILocation[]) {
    this.players = players;
    this.locations = locations;

    this.turnOf = this.getInitialPlayer();
  }
  playCard(player: IPlayer, board: IBoard): void {
    throw new Error("Method not implemented.");
  }

  private getInitialPlayer() {
    const randomPlayerIndex = Math.floor(Math.random() * this.players.length);

    return this.players[randomPlayerIndex];
  }
}