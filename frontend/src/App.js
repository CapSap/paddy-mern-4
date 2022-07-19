import React, { useEffect, useState } from "react";
import Entry from "./components/Entry";

import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";

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
      <div>Nav Bar will go here</div>
      <Routes>
        <Route
          path="/"
          element={
            <Home store={store} orders={allOrders} setStore={setStore} />
          }
        />
        {/* entry component is independandt of store state. any view can create a CNC request */}
        <Route path="/entry" element={<Entry />} />
      </Routes>
      <br />
    </>
  );
}

export default App;
