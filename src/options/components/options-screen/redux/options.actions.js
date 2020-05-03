import { SET_SIZE } from "./node_modules/app/constants/action-types";

export const setSize = ({ size }) => ({
  type: SET_SIZE,
  payload: {
    size,
  },
});
