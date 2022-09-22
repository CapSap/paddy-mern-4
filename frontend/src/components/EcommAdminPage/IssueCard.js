import { useState } from "react";

const IssueCard = ({ order }) => {
  const [items, setItems] = useState({
    sendingStore: "",
  });

  function onRequestReassign(e) {
    e.preventDefault();
    console.log(e.target.name);
    fetch(`http://localhost:5000/api/orders/${e.target.name}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...items,
        requestID: e.target.name,
        // should we set message to "" now?
        message: "",
      }),
    });
  }

  function onChange(e) {
    setItems({
      ...items,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <>
      {order.orderedItems.map((item) => {
        return (
          <>
            <tr key={order._id} className="border">
              <td>{new Date(order.createdAt).toLocaleDateString()}</td>
              <td>{order.orderNumber}</td>
              <td>{order.customerName}</td>
              <td>{order.forHour}</td>
              <td>{order.pickupLocation}</td>
              <td>{item.sendingStore}</td>
              <td>{order.notes}</td>
              <td>{item.items}</td>
              <td>{item.ibt}</td>
              <td>{item.tracking}</td>
            </tr>
            <tr>
              <td>
                Message from {item.sendingStore}: {item.message}
              </td>
              {/* if ibt does not exist allow for whole  request reasign, otherwise a new request must be created. */}

              <td>
                <form
                  action="
                submit"
                  onSubmit={onRequestReassign}
                  name={item._id}
                >
                  <label
                    className="inline-block text-gray-800 text-sm sm:text-base mb-2"
                    htmlFor="sendingStore"
                  >
                    Reasign whole request to:{" "}
                  </label>
                  <select
                    className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                    name="sendingStore"
                    key={"sendingStore"}
                    onChange={onChange}
                    value={items.sendingStore}
                    required={true}
                  >
                    <option disabled value="">
                      Please select a store
                    </option>
                    <option value="Canberra">Canberra - 213</option>
                    <option value="Fortitude Valley">
                      Fortitude Valley - 416
                    </option>
                    <option value="Hobart">Hobart - 710</option>
                    <option value="Melbourne">Melbourne - 314</option>
                    <option value="Seven Hills">Seven Hills - 208</option>
                    <option value="Perth">Perth - 615</option>
                    <option value="Ringwood">Ringwood - 319</option>
                    <option value="Sydney">Sydney - 210</option>
                  </select>
                  <button>Update</button>
                </form>
              </td>

              <td>
                <form
                  action="
                  submit"
                >
                  <label
                    className="inline-block text-gray-800 text-sm sm:text-base mb-2"
                    htmlFor="sendingStore"
                  >
                    Create a new request for:{" "}
                  </label>
                  <select
                    className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                    name="sendingStore"
                    key={"sendingStore"}
                  >
                    <option value="Canberra">Canberra - 213</option>
                    <option value="Fortitude Valley">
                      Fortitude Valley - 416
                    </option>
                    <option value="Hobart">Hobart - 710</option>
                    <option value="Melbourne">Melbourne - 314</option>
                    <option value="Seven Hills">Seven Hills - 208</option>
                    <option value="Perth">Perth - 615</option>
                    <option value="Ringwood">Ringwood - 319</option>
                    <option value="Sydney">Sydney - 210</option>
                  </select>
                  <label htmlFor="items">Items to request: </label>
                  <textarea name="items" type="text" />
                  <button>Update</button>
                </form>
              </td>
            </tr>
          </>
        );
      })}
    </>
  );
};

export default IssueCard;
