const Issues = ({ orders, filterBy }) => {
  console.log(orders);

  function onUpdateClick(e) {}

  const data = orders
    .filter((order) => order.status.includes(filterBy))
    .map((order) => (
      <>
        {order.orderedItems.map((item) => {
          return (
            <>
              <tr key={order._id} className="border">
                {console.log(order.orderedItems)}
                <td>{new Date(order.createdAt).toLocaleDateString()}</td>
                <td>{order.orderNumber}</td>
                <td>{order.customerName}</td>
                <td>{order.status}</td>
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
    ));

  return (
    <div>
      {data.length ? (
        <table className="table-auto border w-full text-center">
          <thead className="bg-gray-100">
            <tr>
              <th>Date</th>
              <th>Order</th>
              <th>Customer Name</th>
              <th>Order Status</th>
              <th>Four Hour?</th>
              <th>Collection Store</th>
              <th>Sending Store</th>
              <th>Notes</th>
              <th>Items</th>
              <th>IBT</th>
              <th>Tracking</th>
            </tr>
          </thead>

          <tbody>{data}</tbody>
        </table>
      ) : (
        <p>No orders found with status {filterBy}</p>
      )}
    </div>
  );
};

export default Issues;
