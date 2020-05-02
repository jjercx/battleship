import React from "react";
import ShipImage from "./ship-image";
import Ship from "game/models/ship";

export default {
  title: "app/Ship Image",
  component: ShipImage,
};

export const Aircraft = () => <ShipImage ship={new Ship({ size: 4 })} />;

export const Battleship = () => <ShipImage ship={new Ship({ size: 3 })} />;

export const Submarine = () => <ShipImage ship={new Ship({ size: 2 })} />;

export const Carriership = () => <ShipImage ship={new Ship({ size: 1 })} />;
