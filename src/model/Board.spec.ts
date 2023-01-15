import {
  assert,
  beforeAll,
  beforeEach,
  test,
  describe,
  expect,
  it,
  vitest,
} from "vitest";
import { BoardBuilder } from "../builders/BoardBuilder";
import { PlayerBuilder } from "../builders/PlayerBuilder";

describe("Board", () => {
  test.todo("should instantiate board with passed atributes");

  it("should set turnOf to first player according to random number", () => {
    const selectPlayerRandomIndex = 0;
    vitest.spyOn(Math, "random").mockReturnValue(selectPlayerRandomIndex);
    const players = [new PlayerBuilder().build(), new PlayerBuilder().build()];

    const board = new BoardBuilder().withPlayers(players).build();

    expect(board.turnOf).toEqual(players[selectPlayerRandomIndex]);
  });

  it.todo(
    "should play a card in a location when call create playCardAction",
    () => {
      const board = new BoardBuilder().build();
    }
  );
});
