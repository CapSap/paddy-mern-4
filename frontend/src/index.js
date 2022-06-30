import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./components/Navbar";
import StoreChooser from "./components/StoreChooser";

function App() {
  return (
    <div>
      <NavBar />
      <StoreChooser />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
