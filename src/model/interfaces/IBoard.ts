import ICard from "./ICard";
import ILocation from "./ILocation";
import IPlayer from "./IPlayer";

export default interface IBoard {
  players: IPlayer[];
  turnOf: IPlayer;
  locations: ILocation[];

  playCard(card: ICard, player: IPlayer, location: ILocation): void;
}
