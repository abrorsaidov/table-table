import { ADD_ROW, REMOVE_LAST, LOADING, STOP_LOADING } from "./tableTypes";

export const addRow = (row, id) => {
  row.id = id;
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

export const loading = () => {
  return {
    type: LOADING,
  };
};

export const stopLoading = () => {
  return {
    type: STOP_LOADING,
  };
};
