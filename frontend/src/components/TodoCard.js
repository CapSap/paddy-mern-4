import { useState } from "react";

const TodoCard = ({ order }) => {
  const [orderedItems, setOrderedItems] = useState();

  function onChange(e) {
    setOrderedItems({
      ...orderedItems,
      [e.target.name]: e.target.value,
    });
  }

  function onSubmit(e) {
    e.preventDefault();
    console.log(e.target.value);
  }

  function onFormSubmit(e) {
    e.preventDefault();

    // console.log(JSON.stringify(orderInfo));
    // fetch("http://localhost:5000/api/orders", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(orderInfo),
    // });
  }

  // should this component take in some input from user.
  // and hold that user input as state here?
  // react way would be add onchange function to update state.

  // on button press do the put/update
  // where is this ibt info going to go?
  // parra needs to get this info as ibt awaiting accepting.

  const items = order.orderedItems.map((x) => {
    console.log(x._id);

    return (
      <div key={x.sku} className="bg-red-300 p-4 ">
        <div className="text-lg">
          <p>Description: {x.description}</p>
          <p>Qty: {x.qty}</p>
          <p>Sku: {x.sku}</p>
          <p>Please post to {order.pickupLocation}</p>
        </div>
        <form onSubmit={onSubmit} className="p-2">
          <label htmlFor="ibt"> IBT: </label>
          <input
            onChange={onChange}
            id="ibt"
            name="ibt"
            type="text"
            className=" bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
          ></input>
          <label htmlFor="tracking"> Tracking: </label>
          <input
            onChange={onChange}
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
      </div>
    );
  });

  return (
    <div className="p-2 w-1/2 border">
      <div className="bg-slate-300 ">
        Order #: {order.orderNumber} Name: {order.customerName} Ph:{" "}
        {order.phone}
      </div>
      <div>Order Status: {order.status}</div>
      <div>{items}</div>
    </div>
  );
};

export default TodoCard;
