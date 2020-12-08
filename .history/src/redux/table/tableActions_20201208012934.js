import { ADD_ROW } from "./tableTypes";

export const addRow = (row) => {
  return {
    type: ADD_ROW,
    payload: row,
  };
};
