import { useState } from "react";

const IssueCard = ({ order, filteredRequest }) => {
  const [oldRequest, setOldRequest] = useState({
    ...filteredRequest,
    items: "Don't post anything (cancel entire request)",
    requestStatus: "cancelled",
  });

  const [newRequest, setNewRequest] = useState({
    sendingStore: "",
    items: filteredRequest.items,
  });

  const onNewChange = (e) =>
    setNewRequest({
      ...newRequest,
      [e.target.name]: e.target.value,
    });

  const onOldChange = (e) => {
    setOldRequest({
      ...oldRequest,
      [e.target.name]: e.target.value,
    });
  };

  function onFormSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:5000/api/orders/createNewRequest/${order._id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        oldRequest,
        newRequest,
        author: "ecomm",
      }),
    });
  }

  return (
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
      <h2 className="m-2">Request with issue</h2>
      <div key={filteredRequest.id} className="border-green-300 border m-2">
        <p>Sending Store: {filteredRequest.sendingStore}</p>
        <p>
          Items requested: <strong>{filteredRequest.items}</strong>
        </p>
        <p>
          Message: <strong>{filteredRequest.message}</strong>
        </p>
        <p>Status: {filteredRequest.requestStatus}</p>

        <form onSubmit={onFormSubmit}>
          <div className="flex gap-10 ml-3">
            <div className="flex flex-col justify-between">
              <label htmlFor="sendingStore">Reasign request to: </label>
              <select
                id="sendingStore"
                name="sendingStore"
                defaultValue={""}
                onChange={onNewChange}
                required={true}
              >
                <option disabled={true} value={""}>
                  Select an option{" "}
                </option>
                <option value="Canberra">Canberra - 213</option>
                <option value="Fortitude Valley">Fortitude Valley - 416</option>
                <option value="Hobart">Hobart - 710</option>
                <option value="Melbourne">Melbourne - 314</option>
                <option value="Perth">Perth - 615</option>
                <option value="Ringwood">Ringwood - 319</option>
                <option value="Seven Hills">Seven Hills - 208</option>
                <option value="Sydney">Sydney - 210</option>
              </select>
              <span>
                Please select a store where a brand new request will be sent to{" "}
                {newRequest.sendingStore}
              </span>

              <label
                className="inline-block text-gray-800 text-sm sm:text-base mb-2 mt-4"
                htmlFor="items"
              >
                Item(s):{" "}
              </label>
              <textarea
                required={true}
                className=" resize bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                name="items"
                key={"items"}
                defaultValue={filteredRequest.items}
                onChange={onNewChange}
              />
              <span>
                {newRequest.sendingStore
                  ? `A new request to ${newRequest.sendingStore} will be created with the above items`
                  : "Choose a store first from the drop down"}
              </span>
            </div>

            <div className="flex flex-col">
              <label htmlFor="requestStatus">
                Cancel or Modify orginal request:
              </label>
              <select
                id="requestStatus"
                name="requestStatus"
                onChange={onOldChange}
              >
                <option value="cancelled">Cancel</option>
                <option value="modified by ecomm">Modify</option>
              </select>
              <span>
                Do you still want {filteredRequest.sendingStore} to post some
                items?
              </span>
              <label
                className="inline-block text-gray-800 text-sm sm:text-base mb-2 mt-4"
                htmlFor="items"
              >
                {filteredRequest.sendingStore} Item(s):{" "}
              </label>
              <textarea
                required={true}
                className=" resize bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                name="items"
                key={"items"}
                defaultValue="Don't post anything (cancel entire request)"
                onChange={onOldChange}
              />
            </div>
            <div className="flex items-end">
              <button
                className="md:col-span-2 inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3 mb-4"
                type="submit"
              >
                Update the request
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default IssueCard;
