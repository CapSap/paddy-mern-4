const Card = ({ order }) => {
  console.log(order);
  return (
    <div>
      <div>
        Order #: {order.orderNumber}
        Name: {order.customerName}
        Ph: {order.phone}
      </div>
    </div>
  );
};

export default Card;
