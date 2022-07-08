const Card = ({ order }) => {
  const items = order.orderedItems.map((x) => {
    return (
      <p key={x.sku}>
        Sku: {x.sku} Qty: {x.qty} Descripton: {x.desc}
      </p>
    );
  });

  return (
    <div className="p-2 w-1/2 border">
      <div className="bg-slate-300 ">
        Order #: {order.orderNumber}| Name: {order.customerName} | Ph:{" "}
        {order.phone}
      </div>
      <div>Status</div>
      <div>{items}</div>
    </div>
  );
};

export default Card;
