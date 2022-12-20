const Card = ({ order }) => {
  const items = order.orderedItems.map((x) => {
    return (
      <div key={x._id} className="bg-cyan-200 p-4">
        <div className="text-lg">
          <p>Posting store {x.sendingStore}</p>
          <p>Items: {x.items}</p>
          {order.notes.length > 1 ? <p>Notes: {order.notes}</p> : null}
          <p>Please post to {order.pickupLocation}</p>
          {x.message ? <p>Message: {x.message}</p> : null}
          <p>Request Status: {x.requestStatus}</p>
        </div>
      </div>
    );
  });
  return (
    <div className="p-2 w-1/2 border">
      <div className="bg-slate-300 ">
        Order #: {order.orderNumber} Name: {order.customerName} Ph:{" "}
        {order.phone}
      </div>
      <div>{items}</div>
    </div>
  );
};

export default Card;
