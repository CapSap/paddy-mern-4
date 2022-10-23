import { useState } from "react";

const IssueCard = ({ order }) => {
  const [oldRequest, setOldRequest] = useState({
    _id: "",
    items: "",
    message: "",
    requestStatus: "",
  });

  const [newRequest, setNewRequest] = useState({
    sendingStore: "",
    items: "",
  });

  /*

  oldRequestID: "63267af806a6e9a616ab090f",
  oldRequest: {
  _id: "63267af806a6e9a616ab090f",
  items: "everything except OOS sku",
  message: "from ecomm @ time XXXXX. please see updated request",
  requestStatus: "modified",
  },
  newRequest: { sendingStore: "", items: "" },

  */
  function showHide() {
    console.log("click");
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
      <div className="border-blue-300 border">
        <strong>Requests with issue:</strong>
        {order.orderedItems
          .filter((request) => request.requestStatus.includes("issue"))
          .map((request) => {
            return (
              <div key={request.id} className="border-green-300 border m-2">
                <p>Sending Store: {request.sendingStore}</p>
                <p>
                  Items requested: <strong>{request.items}</strong>
                </p>
                <p>
                  Message: <strong>{request.message}</strong>
                </p>
                <p>Status: {request.requestStatus}</p>

                <form>
                  <div className="flex">
                    <div className="flex flex-col">
                      <label htmlFor="storeChooser">Reasign request to: </label>
                      <select
                        id="storeChooser"
                        name="storeChooser"
                        defaultValue={""}
                        onChange={(e) =>
                          setNewRequest({
                            ...newRequest,
                            sendingStore: e.target.value,
                          })
                        }
                      >
                        <option disabled={true} value={""}>
                          Select an option{" "}
                        </option>
                        <option value="Canberra">Canberra - 213</option>
                        <option value="Fortitude Valley">
                          Fortitude Valley - 416
                        </option>
                        <option value="Hobart">Hobart - 710</option>
                        <option value="Melbourne">Melbourne - 314</option>
                        <option value="Perth">Perth - 615</option>
                        <option value="Ringwood">Ringwood - 319</option>
                        <option value="Seven Hills">Seven Hills - 208</option>
                        <option value="Sydney">Sydney - 210</option>
                      </select>
                      <span>
                        Pleae select a store where a brand new request will be
                        sent to {newRequest.sendingStore}
                      </span>

                      <label
                        className="inline-block text-gray-800 text-sm sm:text-base mb-2"
                        htmlFor="items"
                      >
                        Item(s):{" "}
                      </label>
                      <textarea
                        required={true}
                        className=" resize bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                        name="items"
                        key={"items"}
                        defaultValue={request.items}
                        onChange={(e) =>
                          setNewRequest({
                            ...newRequest,
                            items: e.target.value,
                          })
                        }
                      />
                      <span>
                        {newRequest.sendingStore
                          ? `These items will appear in the request to
                      ${newRequest.sendingStore}`
                          : "Choose a store first from the drop down"}
                      </span>
                    </div>

                    <div className="flex flex-col">
                      <p>Cancel or modify the original item request</p>

                      <label
                        className="inline-block text-gray-800 text-sm sm:text-base mb-2"
                        htmlFor="items"
                      >
                        {request.sendingStore} Item(s):{" "}
                      </label>
                      <textarea
                        required={true}
                        className=" resize bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                        name="items"
                        key={"items"}
                        defaultValue={request.items}
                      />
                    </div>
                    <div>
                      <button
                        className="md:col-span-2 inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
                        type="submit"
                      >
                        Update the request for all stores
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default IssueCard;
