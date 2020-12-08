import { ADD_ROW, REMOVE_LAST } from "./tableTypes";

export const addRow = (row) => {
  return {
    type: ADD_ROW,
    payload: row,
  };
};
export const removeLast = () => {
  return {
    type: REMOVE_LAST,
  };
};
