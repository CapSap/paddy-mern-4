import Card from "./Card";

const AwaitingEcommResponse = ({ store, orders }) => {
  const awaitingOrders = orders.filter((order) => {
    return order.orderedItems.some((item) => {
      return item.sendingStore === store && item.message;
    });
  });

  return (
    <div>
      <h3 className="font-bold">Awating response from ecommerce:</h3>
      {awaitingOrders.map((order) => (
        <Card key={order._id} order={order} />
      ))}
    </div>
  );
};

export default AwaitingEcommResponse;
