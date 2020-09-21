import {
  GAME_SETUP,
  GAME_READY,
  GAME_UPDATE,
} from "app/constants/action-types";
import Ship from "game/models/ship";

export const getShips = ({ game }, player) => {
  const { ships } = game[player - 1];
  return Object.values(ships).map(ship => new Ship(ship));
};

export const getShip = ({ game }, shipId, player) => {
  const { ships } = game[[player - 1]];
  return ships[shipId];
};

export const getHits = ({ game }, player) => {
  const { hits } = game[player - 1];
  return hits;
};

export const getShots = ({ game }, player) => {
  const { shots } = game[player - 1];
  return shots;
};

export const getTurns = ({ game }, player) => {
  const { turns } = game[player - 1];
  return turns;
};

export const getCell = ({ game }, row, col, player) => {
  const { board } = game[player - 1];
  return board && board[row][col];
};

export const initialState = [
  {
    board: null,
    ships: {},
    hits: 0,
    shots: 0,
    turns: 0,
  },
  {
    board: null,
    ships: {},
    hits: 0,
    shots: 0,
    turns: 0,
  },
];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GAME_SETUP: {
      const {
        gameMode: { turns },
      } = payload;
      const [game1, game2] = [...state];
      return [
        { ...game1, turns, shots: 0, hits: 0 },
        { ...game2, turns, shots: 0, hits: 0 },
      ];
    }
    case GAME_READY: {
      const { games } = payload;
      const [game1, game2] = [...state];
      const [setup1, setup2] = games;
      return [
        {
          ...game1,
          ...setup1,
        },
        {
          ...game2,
          ...setup2,
        },
      ];
    }
    case GAME_UPDATE: {
      const { ship, shots, hits, turns, player } = payload;

      const [game1, game2] = [...state];
      const game = state[player - 1];

      const newShips = ship
        ? { ...game.ships, [ship.id]: ship }
        : { ...game.ships };

      const newHits = hits ?? game.hits;

      if (player === 1) {
        return [
          {
            ...game,
            ships: newShips,
            shots,
            hits: newHits,
            turns,
          },
          game2,
        ];
      }

      return [
        game1,
        {
          ...game,
          ships: newShips,
          shots,
          hits: newHits,
          turns,
        },
      ];
    }
    default:
      return state;
  }
};
