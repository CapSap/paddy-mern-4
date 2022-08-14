import React, { useState } from "react";

function Entry() {
  // default state that will be updated on input onChange and sent to mongo when button is clicked
  const [orderInfo, setOrderInfo] = useState({
    orderNumber: "",
    customerName: "",
    pickupLocation: "",
    orderedItems: [
      {
        sendingStore: "Canberra",
        date: "",
        posted: false,
        items: "",
      },
    ],
    fourHour: false,
    notes: "",
  });

  const [itemCounter, setItemCounter] = useState(1);

  function handleChange(e) {
    let name = e.target.id;
    setOrderInfo({
      ...orderInfo,
      [name]: e.target.value,
    });
  }
  // this function handles changing the item request in state. cause its an array a few things are different
  function handleOrderedItemsChange(e) {
    let index = e.target.id;
    let stateName = e.target.name;
    let prevArr = orderInfo.orderedItems;

    prevArr[index][stateName] = e.target.value;
    setOrderInfo({
      ...orderInfo,
      orderedItems: prevArr,
    });
  }

  function onFormSubmit(e) {
    e.preventDefault();
    console.log(JSON.stringify(orderInfo));
    fetch("http://localhost:5000/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderInfo),
    });
  }

  const itemRequester = [];
  for (let i = 0; i < itemCounter; i++) {
    itemRequester.push(
      <div className="p-4 bg-slate-100">
        <p>Request number {i + 1}</p>

        <div>
          <label
            className="inline-block text-gray-800 text-sm sm:text-base mb-2"
            htmlFor="items"
          >
            Item(s):{" "}
          </label>
          <textarea
            required={true}
            className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
            id={i}
            name="items"
            key={"items" + i}
            onChange={(e) => {
              handleOrderedItemsChange(e);
            }}
          />
        </div>
        <div>
          <label
            className="inline-block text-gray-800 text-sm sm:text-base mb-2"
            htmlFor="sendingStore"
          >
            Sending Store:{" "}
          </label>
          <select
            className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
            id={i}
            name="sendingStore"
            key={"sendingStore" + i}
            value={orderInfo.orderedItems[i].sendingStore}
            onChange={(e) => {
              handleOrderedItemsChange(e);
            }}
          >
            <option value="Canberra">Canberra - 213</option>
            <option value="Fortitude Valley">Fortitude Valley - 416</option>
            <option value="Hobart">Hobart - 710</option>
            <option value="Melbourne">Melbourne - 314</option>
            <option value="Seven Hills">Seven Hills - 208</option>
            <option value="Perth">Perth - 615</option>
            <option value="Ringwood">Ringwood - 319</option>
            <option value="Sydney">Sydney - 210</option>
          </select>
        </div>

        <br />
      </div>
    );
  }

  function handleClick(e) {
    e.preventDefault();
    setItemCounter(itemCounter + 1);
    let prevState = orderInfo.orderedItems;
    const newRequest = {
      sendingStore: "Canberra",
      date: "",
      posted: false,
      item: "",
    };
    prevState.push(newRequest);
    setOrderInfo({
      ...orderInfo,
      orderedItems: prevState,
    });
  }

  return (
    <>
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <div className="mb-10 md:mb-16">
          <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
            Make requests below
          </h2>
          <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
            Below is a form that will send a request to stores for CNC orders.
            Feedback is welcome
          </p>
        </div>
        <form
          method="POST"
          action="/"
          onSubmit={(e) => onFormSubmit(e)}
          className="max-w-screen-md grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto"
        >
          <div>
            <label
              className="inline-block text-gray-800 text-sm sm:text-base mb-2"
              htmlFor="orderNumber"
            >
              Order Number:{" "}
            </label>
            <input
              required={true}
              type="text"
              name="orderNumber"
              id="orderNumber"
              value={orderInfo.orderNumber}
              onChange={(e) => handleChange(e)}
              className=" w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
            />
          </div>
          <div>
            <label
              htmlFor="customerName"
              className="inline-block text-gray-800 text-sm sm:text-base mb-2"
            >
              Customer Name:{" "}
            </label>
            <input
              required={true}
              type="text"
              name="customerName"
              id="customerName"
              value={orderInfo.customerName}
              onChange={(e) => handleChange(e)}
              className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
            />
          </div>
          <div>
            <label
              className="inline-block text-gray-800 text-sm sm:text-base mb-2"
              htmlFor="pickupLocation"
            >
              Pickup Location:{" "}
            </label>
            <select
              required={true}
              id="pickupLocation"
              value={orderInfo.pickupLocation}
              onChange={(e) => {
                handleChange(e);
              }}
              className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
            >
              <option disabled value="">
                Please select a store
              </option>

              <option value="Canberra">Canberra - 213</option>
              <option value="Fortitude Valley">Fortitude Valley - 416</option>
              <option value="Hobart">Hobart - 710</option>
              <option value="Melbourne">Melbourne - 314</option>
              <option value="Parramatta">Parramatta - 208</option>
              <option value="Perth">Perth - 615</option>
              <option value="Ringwood">Ringwood - 319</option>
              <option value="Sydney">Sydney - 210</option>
            </select>{" "}
          </div>
          <div>
            <label
              htmlFor="fourHour"
              className="text-gray-800 text-sm sm:text-base "
            >
              4 Hour:
            </label>
            <div className="mt-4 space-y-4">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="fourHour"
                    name="fourHour"
                    type="checkbox"
                    value={orderInfo.fourHour}
                    onChange={(e) => handleChange(e)}
                    className="ml-2 focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                  ></input>
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="fourHour"
                    className="font-medium text-gray-700"
                  >
                    Check this if the customer is expecting order to be ready
                    within 4 hours.
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <label
              htmlFor="notes"
              className="inline-block text-gray-800 text-sm sm:text-base mb-2"
            >
              Notes:{" "}
            </label>
            <textarea
              type="text"
              name="notes"
              id="notes"
              value={orderInfo.notes}
              onChange={(e) => handleChange(e)}
              className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
            ></textarea>
          </div>
          <div className="md:col-span-2 bg-slate-300 flex flex-col justify-center items-center">
            {" "}
            <p>Make multiple requests: </p>
            <button
              type="button"
              onClick={(e) => handleClick(e)}
              className="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
            >
              {" "}
              Get more requests
            </button>
          </div>
          <p className="max-w-screen-md md:col-span-2 text-gray-500 md:text-lg text-center mx-auto">
            Make a request for each sku on the order
          </p>
          {itemRequester}
          <button
            className="md:col-span-2 inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
            type="submit"
          >
            Send order/request to store
          </button>
        </form>
      </div>
    </>
  );
}

export default Entry;
