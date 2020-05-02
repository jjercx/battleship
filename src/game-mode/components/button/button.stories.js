import React from "react";
import Button from "./button";
import { action } from "@storybook/addon-actions";

export default {
  title: "game-mode/Button",
  component: Button,
};

export const Default = () => <Button text="ready" onClick={action("click")} />;
