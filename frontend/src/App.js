import React, { useState } from "react";
import StoreChooser from "./components/StoreChooser";

function App() {
  const [store, setStore] = useState("");

  return (
    <div>
      <StoreChooser store={store} setStore={setStore} />
    </div>
  );
}

export default App;
