const Dashboard = ({ orders, filter }) => {
  console.log(filter);
  const data = orders
    .filter((order) => order.status === filter)
    .map((order) => (
      <tr key={order._id} className="border">
        <td>{new Date(order.createdAt).toLocaleDateString()}</td>
        <td>{order.orderNumber}</td>
        <td>{order.customerName}</td>
        <td>{order.status}</td>
        {console.log(order)}
      </tr>
    ));

  return (
    <div>
      Dashboard displaying orders with status: {filter}
      <table className="table-auto border ">
        <thead className="bg-gray-100">
          <tr>
            <th>Date</th>
            <th>Order</th>
            <th>Customer Name</th>
            <th>Order Status</th>
          </tr>
        </thead>
        <tbody>{data}</tbody>
      </table>
    </div>
  );
};

export default Dashboard;
