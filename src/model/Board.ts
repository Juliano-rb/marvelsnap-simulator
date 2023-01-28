import { PlaceCardAction } from "./Action/PlaceCard";
import { EventDispatcher } from "./EventDispatcher";
import IBoard from "./interfaces/IBoard";
import ICard from "./interfaces/ICard";
import IPlayer from "./interfaces/IPlayer";

export class Board implements IBoard {
  players: IPlayer[];
  turnOf: IPlayer;
  locations: Location[];
  eventDispatcher: EventDispatcher;

  constructor(players: IPlayer[], locations: Location[]) {
    this.players = players;
    this.locations = locations;
    this.eventDispatcher = new EventDispatcher(this);
    this.turnOf = this.getInitialPlayer();
  }

  private getInitialPlayer() {
    const randomPlayerIndex = Math.floor(Math.random() * this.players.length);

    return this.players[randomPlayerIndex];
  }

  playCard(card: ICard, player: IPlayer, location: Location): void {
    const locationIndex = this.locations.indexOf(location);
    const placeCardAction = new PlaceCardAction(player, {
      card,
      locationIndex,
    });

    this.eventDispatcher.executeAction(placeCardAction);
  }
}
