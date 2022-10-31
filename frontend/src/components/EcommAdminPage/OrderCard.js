import { useState } from "react";

const OrderCard = ({ order }) => {
  const [displayRequests, setDisplayRequests] = useState(false);

  function onClick(e) {
    e.preventDefault();
    setDisplayRequests(!displayRequests);
  }

  const request = order.orderedItems.map((request) => (
    <>
      <div key={request.id} className="border-green-300 border m-2">
        <p>Sending Store: {request.sendingStore}</p>
        <p>
          Items requested: <strong>{request.items}</strong>
        </p>
        <p>IBT: {request.ibt}</p>
        <p>
          Message:{" "}
          <strong>{request.message ? request.message : "no message"}</strong>
        </p>
        <p>Status: {request.requestStatus}</p>
      </div>
    </>
  ));

  return (
    <>
      <div className="border border-red-300 m-4">
        <div className="flex">
          <p className="m-2">Order Number: {order.orderNumber}</p>
          <p className="m-2">Name: {order.customerName}</p>
          <p className="m-2">Pickup Location: {order.pickupLocation}</p>
          <p className="m-2">Four Hour: {order.fourHour ? "Yes" : "No"}</p>
          <p className="m-2">
            Number of parcels/requests: {order.orderedItems.length}
          </p>
          <div className="m-2">Link to magento page:</div>
        </div>
        <button
          className="md:col-span-2 inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-2 py-1"
          onClick={onClick}
        >
          Show/Hide request details
        </button>

        {displayRequests ? request : false}
      </div>
    </>
  );
};

export default OrderCard;
