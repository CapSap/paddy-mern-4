const Dashboard = ({ orders, filterBy }) => {
  console.log(orders);
  const data = orders
    .filter((order) => order.status === filterBy)
    .map((order) => (
      <>
        {/* <tr key={order._id} className="border">
          {console.log(order.orderedItems)}
          <td>{new Date(order.createdAt).toLocaleDateString()}</td>
          <td>{order.orderNumber}</td>
          <td>{order.customerName}</td>
          <td>{order.status}</td>
          <td>{order.forHour}</td>
          <td>{order.pickupLocation}</td>
        </tr>

        {order.orderedItems.map((item) => {
          return (
            <>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>{item.sendingStore}</td>
                <td>{item.items}</td>
              </tr>
            </>
          );
        })} */}

        {order.orderedItems.map((item) => {
          return (
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

export default Dashboard;
