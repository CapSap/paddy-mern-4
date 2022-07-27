const EcommAdminPage = ({ orders }) => {
  const data = orders.map((order) => (
    <tr key={order._id}>
      <td>{order.orderNumber}</td>
      <td>{order.customerName}</td>
      <td>{order.status}</td>
      {console.log(order)}
    </tr>
  ));

  return (
    <div>
      <ul>
        <li>orders with ibts and awaiting accepting</li>
        <li>orders with problems</li>
        <li>orders pending store action</li>
        <li>archive showing all orders</li>
      </ul>
      <p>
        a table that holds all the info a person needs to: accept IBTS, follow
        up.{" "}
      </p>
      <br />
      <p>Orders waiting for IBT</p>
      <table>
        <thead>
          <tr>
            <th>Order Number</th>
            <th>Name</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>{data}</tbody>
      </table>
      <br />
      <p>orders ready for ibt acceptace</p>

      <table>
        <thead>
          <tr>
            <th>Order Number</th>
            <th>Name</th>
            <th>Status</th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default EcommAdminPage;
