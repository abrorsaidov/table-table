import { addRow } from "./tableActions";
import { ADD_ROW, REMOVE_LAST, LOADING, STOP_LOADING } from "./tableTypes";

const waiting = {
  id: 1,
  first_name: "Zachariao",
  last_name: "Halliberton",
  gender: "male",
  email: "zhalliberton0@dyndns.org",
  age: 53,
  country: "Somalia",
  phone: "1359512346",
};

const initialState = {
  rows: [
    {
      id: 1,
      first_name: "Zachariao",
      last_name: "Halliberton",
      gender: "male",
      email: "zhalliberton0@dyndns.org",
      age: 53,
      country: "Somalia",
      phone: "1359512346",
    },
    {
      id: 2,
      first_name: "Javier",
      last_name: "Kivelle",
      email: "jkivelle1@boston.com",
      gender: "male",
      age: 33,
      country: "China",
      phone: "4674120904",
    },
    {
      id: 3,
      first_name: "Westbrook",
      last_name: "Collard",
      email: "wcollard2@barnesandnoble.com",
      gender: "female",
      age: 18,
      country: "Poland",
      phone: "8653985413",
    },
  ],
  loading: false,
};

const tableReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ROW:
      return {
        ...state,
        rows: [...state.rows, action.payload],
      };
    case REMOVE_LAST:
      return {
        ...state,
        rows: state.rows.filter((value, index, arr) => {
          return index < state.rows.length - 1;
        }),
      };
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case STOP_LOADING:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default tableReducer;
