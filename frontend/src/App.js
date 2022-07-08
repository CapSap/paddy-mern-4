import React, { useEffect, useState } from "react";
import Entry from "./components/Entry";
import Incoming from "./components/Incoming";
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
    <>
      <StoreChooser store={store} setStore={setStore} />
      <Entry store={store} />
      <Todos store={store} />
      <Incoming store={store} orders={allOrders} />
    </>
  );
}

export default App;
