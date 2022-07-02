import React, { useEffect, useState } from "react";
import StoreChooser from "./components/StoreChooser";
import Todos from "./components/Todos";

function App() {
  const [store, setStore] = useState("");

  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/orders", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
  }, []);

  return (
    <div>
      <StoreChooser store={store} setStore={setStore} />
      <Todos store={store} />
    </div>
  );
}

export default App;
