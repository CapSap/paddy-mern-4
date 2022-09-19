import React, { useEffect, useState } from "react";
import Entry from "./components/EntryPage/Entry";

import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/HomePage/Home";
import NavBar from "./components/Navbar";
import EcommAdminPage from "./components/EcommAdminPage/EcommAdminPage";

function App() {
  const [store, setStore] = useState("");

  const [allOrders, setAllOrders] = useState([]);

  const [update, setUpdate] = useState(true);

  const updater = () => {
    setUpdate(!update);
  };

  useEffect(() => {
    fetch("http://localhost:5000/api/orders", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
  }, [update]);

  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              store={store}
              orders={allOrders}
              setStore={setStore}
              updater={updater}
            />
          }
        />
        {/* entry component is independandt of store state. any view can create a CNC request */}
        <Route path="/entry" element={<Entry />} />
        <Route path="/ecomm" element={<EcommAdminPage orders={allOrders} />} />
      </Routes>
      <br />
    </>
  );
}

export default App;
