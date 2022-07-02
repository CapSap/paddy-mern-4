const Incoming = (props) => {
  console.log(props.orders);

  const row = props.orders
    .filter((x) => x.pickupLocation === "Syd")
    .map((x) => {
      {
        console.log(x);
      }
      return (
        <tr key={x._id}>
          <td>{new Date(x.createdAt).toLocaleDateString()}</td>
          <td>{x.orderNumber}</td>
          <td>{x.customerName}</td>
          <td>{x.customerName}</td>
          <td>{x.customerPhone}</td>
        </tr>
      );
    });

  console.log(row);

  return (
    <>
      <h3>Incoming Orders / Awaiting customer pickup</h3>
      <table>
        <tr>
          <th>Date</th>
          <th>Order Number</th>
          <th>Custome Name</th>
          <th>4 Hour?</th>

          <th>Phone</th>
          <th>Notes</th>
        </tr>
        {row}
      </table>
    </>
  );
};

export default Incoming;
