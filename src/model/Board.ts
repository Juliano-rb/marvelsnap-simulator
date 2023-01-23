import { PlaceCardAction } from "./Action/PlaceCard";
import { EventDispatcher } from "./IEventDispatcher";
import IBoard from "./interfaces/IBoard";
import ICard from "./interfaces/ICard";
import IEventDispatcher from "./interfaces/IEventDispatcher";
import ILocation from "./interfaces/ILocation";
import IPlayer from "./interfaces/IPlayer";
import { Trigger } from "./Trigger";

export class Board implements IBoard {
  players: IPlayer[];
  turnOf: IPlayer;
  locations: ILocation[];
  eventDispatcher: IEventDispatcher;

  constructor(players: IPlayer[], locations: ILocation[]) {
    this.players = players;
    this.locations = locations;
    this.eventDispatcher = new EventDispatcher(this);
    this.turnOf = this.getInitialPlayer();
  }

  private getInitialPlayer() {
    const randomPlayerIndex = Math.floor(Math.random() * this.players.length);

    return this.players[randomPlayerIndex];
  }

  playCard(card: ICard, player: IPlayer, location: ILocation): void {
    const locationIndex = this.locations.indexOf(location);
    const placeCardAction = new PlaceCardAction(player, {
      card,
      locationIndex,
    });

    const trigger = new Trigger(placeCardAction, {}, undefined);

    this.eventDispatcher.registerTrigger(trigger);
  }
}
