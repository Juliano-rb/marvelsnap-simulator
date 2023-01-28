import { describe, expect, it, vitest } from "vitest";
import { BoardBuilder } from "../builders/BoardBuilder";
import { CardBuilder } from "../builders/CardBuilder";
import { LocationBuilder } from "../builders/LocationBuilder";
import { PlayerBuilder } from "../builders/PlayerBuilder";

describe("Board", () => {
  it("should instantiate board with passed players and locations", () => {
    const players = [new PlayerBuilder().build(), new PlayerBuilder().build()];
    const locations = [
      new LocationBuilder().build(),
      new LocationBuilder().build(),
      new LocationBuilder().build(),
    ];

    const board = new BoardBuilder()
      .withPlayers(players)
      .withLocations(locations)
      .build();

    expect(board.locations).toEqual(locations);
    expect(board.players).toEqual(players);
  });

  it("should set turnOf to first player according to random number", () => {
    const selectPlayerRandomIndex = 0;
    vitest.spyOn(Math, "random").mockReturnValue(selectPlayerRandomIndex);
    const players = [new PlayerBuilder().build(), new PlayerBuilder().build()];

    const board = new BoardBuilder().withPlayers(players).build();

    expect(board.turnOf).toEqual(players[selectPlayerRandomIndex]);
  });

  it("should play a card in a location when call playCardAction", () => {
    const player = new PlayerBuilder().build();
    const board = new BoardBuilder().build();
    const card = new CardBuilder().build();

    board.playCard(card, player, board.locations[0]);

    expect(board.locations[0].cards.length).toBe(1);
    expect(board.locations[0].cards[0]).toBe(card);
  });
});
