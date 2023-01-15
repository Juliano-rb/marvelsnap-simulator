import ILocation from "./ILocation";
import IPlayer from "./IPlayer";

export default interface IBoard {
  players: IPlayer[];
  turnOf: IPlayer;
  locations: ILocation[];

  playCard(player: IPlayer, board: IBoard): void;
}
