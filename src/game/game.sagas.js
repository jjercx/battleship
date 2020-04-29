import { takeLatest, put } from "redux-saga/effects";
import { GAME_SETUP } from "app/constants/action-types";
import shipData from "game/ships.data";
import Ship from "game/ship";
import { gameReady } from "game/game.actions";
import { randomShuffle, randomNumber } from "app/helpers/random";

const DIRECTIONS = [
  { name: "LEFT", h: -1, v: 0 },
  { name: "RIGHT", h: +1, v: 0 },
  { name: "UP", h: 0, v: +1 },
  { name: "DOWN", h: 0, v: -1 },
];

const EMPTY = "-----";

const createShipsFromData = data => {
  const ships = {};
  data.forEach(({ count, size }) => {
    for (let i = 0; i < count; i++) {
      const ship = new Ship(size);
      ships[ship.id] = ship;
    }
  });
  return ships;
};

const createEmptyBoard = size => {
  const board = [];
  for (let i = 0; i < size; i++) {
    const row = [];
    for (let j = 0; j < size; j++) {
      row.push(EMPTY);
    }
    board.push(row);
  }
  return board;
};

const randomPosition = (board, ship) => {
  while (true) {
    const boardSize = board[0].length;
    const [row, col] = [randomNumber(boardSize), randomNumber(boardSize)];

    if (board[row][col] !== EMPTY) {
      continue;
    }

    const randomDirections = randomShuffle(DIRECTIONS);

    for (let dir of randomDirections) {
      const { h, v } = dir;
      let valid = true;

      for (let k = 0; k < ship.size; k++) {
        const newRow = row + k * h;
        const newCol = col + k * v;

        if (newRow >= boardSize || newRow < 0) {
          valid = false;
          break;
        }

        if (newCol >= boardSize || newCol < 0) {
          valid = false;
          break;
        }

        if (board[newRow][newCol] !== EMPTY) {
          valid = false;
          break;
        }
      }
      if (valid) {
        return { row, col, h, v };
      }
    }
  }
};

const fillBoardWithShips = (board, ships) => {
  Object.values(ships).forEach(ship => {
    const { row, col, h, v } = randomPosition(board, ship);
    for (let k = 0; k < ship.size; k++) {
      board[row + k * h][col + k * v] = ship.id;
    }
  });
};

function* gameSetup({ payload: boardSize }) {
  const ships = createShipsFromData(shipData);
  const board = createEmptyBoard(boardSize);

  fillBoardWithShips(board, ships);

  yield put(gameReady({ ships, board }));
}

export default [takeLatest(GAME_SETUP, gameSetup)];
