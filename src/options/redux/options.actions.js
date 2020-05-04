import { SET_SIZE } from "app/constants/action-types";

export const setSize = ({ size }) => ({
  type: SET_SIZE,
  payload: {
    size,
  },
});
