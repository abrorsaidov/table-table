import React, { useContext } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import UserContext from "./components/userContext";
import State from "./components/state";
import ComponentC from "./components/ComponentC";
import Forms from "./components/Forms";
import MyTable from "./components/MyTable";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Forms />
        <MyTable />
      </div>
    </Provider>
  );
}

export default App;
