import React, { useState } from "react";
import ReactDOM from "react-dom";
import NavBar from "./components/Navbar";
import StoreChooser from "./components/StoreChooser";
import Todos from "./components/Todos";

function App() {
  const [store, setStore] = useState();

  return (
    <div>
      <StoreChooser />
      <Todos />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
