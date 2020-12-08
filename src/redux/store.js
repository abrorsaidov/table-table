import { createStore } from "redux";
import tableReducer from "./table/tableReducer";

const store = createStore(tableReducer);

export default store;
