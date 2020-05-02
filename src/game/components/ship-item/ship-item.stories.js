import React from "react";
import ShipItem from "game/components/ship-item";
import Ship from "game/models/ship";

export default {
  title: "game/Ship Item",
  component: ShipItem,
};

export const Aircraft = () => <ShipItem ship={new Ship({ size: 4 })} />;

export const Battleship = () => <ShipItem ship={new Ship({ size: 3 })} />;

export const Submarine = () => <ShipItem ship={new Ship({ size: 2 })} />;

export const Carriership = () => <ShipItem ship={new Ship({ size: 1 })} />;
