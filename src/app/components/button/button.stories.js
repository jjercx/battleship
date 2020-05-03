import React from "react";
import Button from "./button";
import { action } from "@storybook/addon-actions";

export default {
  title: "home/Button",
  component: Button,
};

export const Default = () => <Button text="prueba" onClick={action("click")} />;
