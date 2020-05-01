import React from "react";
import Grid from "game/components/grid";

export default {
  title: "Grid",
  component: Grid,
  excludeStories: /.*Data$/,
};

export const statData = {
  size: 10,
};

export const Default = () => <Grid {...statData} />;