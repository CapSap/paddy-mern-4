import { useState } from "react";

const TodoCard = ({ order, store, updater }) => {
  const [orderedItems, setOrderedItems] = useState({});

  // this state hides/displays message text area and toggles required for ibt/tracking
  const [displayIssue, setDisplayIssue] = useState(false);

  function onChange(e) {
    const messageWithAuthor =
      e.target.name === "message"
        ? "Message from " +
          store +
          " at " +
          new Date().toISOString() +
          ": " +
          e.target.value
        : orderedItems.message;

    setOrderedItems({
      ...orderedItems,
      [e.target.name]: e.target.value,
      message: messageWithAuthor,
      requestStatus: messageWithAuthor ? "issue" : "updated",
    });
  }

  function onFormSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:5000/api/orders/${e.target.name}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...orderedItems,
        requestID: e.target.name,
      }),
    });
    updater();
  }

  function onIssueClick(e) {
    e.preventDefault();
    setDisplayIssue(!displayIssue);
  }

  const items = order.orderedItems
    .filter((x) => x.sendingStore === store)
    .map((x) => {
      return (
        <div key={x.sku} className="bg-green-200 p-4 ">
          <div className="text-lg">
            <p>Posting store {x.sendingStore}</p>
            <p>Items: {x.items}</p>
            {order.notes.length > 1 ? <p>Notes: {order.notes}</p> : null}
            <p>Please post to {order.pickupLocation}</p>
            <p>Request Status: {x.status}</p>
          </div>
          <form name={x._id} onSubmit={onFormSubmit} className="p-2">
            <label htmlFor="ibt"> IBT: </label>
            <input
              onChange={onChange}
              required={!displayIssue}
              id="ibt"
              name="ibt"
              type="text"
              className=" bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
            ></input>
            <label htmlFor="tracking"> Tracking: </label>
            <input
              onChange={onChange}
              required={!displayIssue}
              id="tracking"
              name="tracking"
              type="text"
              className=" bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
            ></input>
            <button
              type="submit"
              className="ml-2 bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base text-center rounded-lg outline-none transition duration-100 px-8 py-3"
            >
              Update
            </button>
          </form>
          <form onSubmit={onFormSubmit} name={x._id}>
            <button
              className="ml-2 bg-red-500 hover:bg-red-600 active:bg-red-700 focus-visible:ring ring-red-300 text-white text-sm md:text-base text-center rounded-lg outline-none transition duration-100 px-8 py-3"
              onClick={onIssueClick}
            >
              There is an issue!
            </button>
            {displayIssue ? (
              <>
                <label htmlFor="message">Message: </label>{" "}
                <textarea
                  onChange={onChange}
                  name="message"
                  required={displayIssue}
                ></textarea>
                <button
                  className="ml-2 bg-green-500 hover:bg-green-600 active:bg-green-700 focus-visible:ring ring-green-300 text-white text-sm md:text-base text-center rounded-lg outline-none transition duration-100 px-8 py-3"
                  type="submit"
                >
                  Send to Ecomm
                </button>
              </>
            ) : null}
          </form>
        </div>
      );
    });

  return (
    <div className="p-2 w-1/2 border">
      <div className="bg-slate-300 ">
        Order #: {order.orderNumber} Name: {order.customerName} Ph:{" "}
        {order.phone}
      </div>
      <p>Number of shipments/requests {order.orderedItems.length}</p>

      <div>{items}</div>
    </div>
  );
};

export default TodoCard;
