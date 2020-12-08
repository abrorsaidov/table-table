import { addRow } from "./cakeTypes";
import { ADD_ROW } from "./cakeTypes";

const initialState = {
  rows: [
    {
      id: 1,
      first_name: "Zacharia",
      last_name: "Halliberton",
      email: "zhalliberton0@dyndns.org",
      date_of_birth: "2016-07-02T11:38:40Z",
      age: 53,
      country: "Somalia",
      phone: "1359512346",
    },
    {
      id: 2,
      first_name: "Javier",
      last_name: "Kivelle",
      email: "jkivelle1@boston.com",
      date_of_birth: "1976-08-29T11:02:27Z",
      age: 33,
      country: "China",
      phone: "4674120904",
    },
    {
      id: 3,
      first_name: "Westbrook",
      last_name: "Collard",
      email: "wcollard2@barnesandnoble.com",
      date_of_birth: "2015-07-18T20:23:09Z",
      age: 18,
      country: "Poland",
      phone: "8653985413",
    },
  ],
};

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ROW:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

export default tableReducer;
