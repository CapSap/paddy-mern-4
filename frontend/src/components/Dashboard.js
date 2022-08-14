const Dashboard = ({ orders, filterBy }) => {
  console.log(orders);

  function onArchiveClick(e) {}

  const data = orders.map((order) => (
    <>
      {order.orderedItems
        .filter((item) => item.status.includes(filterBy))
        .map((item) => {
          return (
            <tr key={order._id} className="border">
              {console.log(order.orderedItems)}
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
              <td>
                <button
                  onClick={onArchiveClick}
                  className="md:col-span-2 inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
                >
                  Archive
                </button>
              </td>
            </tr>
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
              <th>Four Hour?</th>
              <th>Collection Store</th>
              <th>Sending Store</th>
              <th>Notes</th>
              <th>Items</th>
              <th>IBT</th>
              <th>Tracking</th>
              <th>Archive</th>
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

export default Dashboard;
