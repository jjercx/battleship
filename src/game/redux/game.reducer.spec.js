import gameReducer from "./game.reducer";
import { gameSetup, gameReady, gameUpdate } from "./game.actions";

describe("game reducer", () => {
  describe("on GAME_SETUP", () => {
    it("sets game loading", () => {
      const state = gameReducer(undefined, gameSetup({ size: 10 }));
      expect(state.loading).toBeTrue();
    });
  });
  describe("on GAME_READY", () => {
    let ships, board, state;
    beforeAll(() => {
      ships = {};
      board = [[]];
      state = gameReducer(undefined, gameReady({ ships, board }));
    });

    it("stops game loading", () => {
      expect(state.loading).toBeFalse();
    });

    it("sets ships and board", () => {
      expect(state.board).toBe(board);
      expect(state.ships).toBe(ships);
    });
  });
  describe("on GAME_UPDATE", () => {
    let shots, turns;
    beforeAll(() => {
      shots = 0;
      turns = 0;
    });

    describe("when user did hit a ship", () => {
      it("updates the state", () => {
        const ship = { id: "12345" };
        const hits = 1;
        const state = gameReducer(
          undefined,
          gameUpdate({ ship, shots, hits, turns })
        );
        expect(state.ships).toContainKey(ship.id);
        expect(state.shots).toBe(shots);
        expect(state.hits).toBe(hits);
        expect(state.turns).toBe(turns);
      });
    });

    describe("when user did NOT hit a ship", () => {
      it("updates the state", () => {
        const state = gameReducer(undefined, gameUpdate({ shots, turns }));
        expect(state.shots).toBe(shots);
        expect(state.turns).toBe(turns);
      });
    });
  });
});
