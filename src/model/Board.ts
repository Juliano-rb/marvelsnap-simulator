import { PlaceCardAction } from "./Action/PlaceCard";
import { Card } from "./Card";
import { EventBus } from "./EventBus";
import { Player } from "./Player";
import { Location } from "./Location";

export class Board {
  players: Player[];
  turnOf: Player;
  locations: Location[];
  eventBus: EventBus;

  constructor(players: Player[], locations: Location[]) {
    this.players = players;
    this.locations = locations;
    this.eventBus = new EventBus(this);
    this.turnOf = this.getInitialPlayer();
  }

  private getInitialPlayer() {
    const randomPlayerIndex = Math.floor(Math.random() * this.players.length);

    return this.players[randomPlayerIndex];
  }

  playCard(card: Card, player: Player, location: Location): void {
    const locationIndex = this.locations.indexOf(location);
    const placeCardAction = new PlaceCardAction(player, {
      card,
      locationIndex,
    });

    this.eventBus.executeAction(placeCardAction);
  }
}
