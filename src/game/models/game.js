import shipData from "game/models/ships.data";
import Ship from "game/models/ship";
import { randomShuffle, randomNumber } from "app/utils/random";
import { EMPTY, DIRECTIONS } from "app/constants/game";

export default class Game {
  static setup(boardSize) {
    const ships = Game.createShipsFromData(shipData.data);
    const board = Game.createEmptyBoard(boardSize);

    Game.fillBoardWithShips(board, ships);

    return { ships, board };
  }

  static createShipsFromData = data => {
    const ships = {};
    data.forEach(({ count, size }) => {
      for (let i = 0; i < count; i++) {
        const ship = new Ship({ size });
        ships[ship.id] = ship;
      }
    });
    return ships;
  };

  static createEmptyBoard = size => {
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

  static fillBoardWithShips = (board, ships) => {
    Object.values(ships).forEach(ship => {
      const { row, col, h, v } = Game.randomPosition(board, ship);
      for (let k = 0; k < ship.size; k++) {
        board[row + k * h][col + k * v] = ship.id;
      }
    });
  };

  static randomPosition = (board, ship) => {
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
}
