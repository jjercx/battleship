import React from "react";
import ShipItem from "game/ship-item";
import Ship from "./ship";

export default {
  title: "Ship Item",
  component: ShipItem,
};

export const Aircraft = () => <ShipItem ship={new Ship(4)} />;
export const Battleship = () => <ShipItem ship={new Ship(3)} />;
export const Submarine = () => <ShipItem ship={new Ship(2)} />;
export const Carriership = () => <ShipItem ship={new Ship(1)} />;
