import Card from "./Card";

const AwaitingEcommResponse = ({ store, orders }) => {

    
  const awaitingOrders = orders.filter((order) => {
    return order.orderedItems.some((item) => {
      console.log(item.message !== null);
      return item.message;
    });
  });

  console.log(awaitingOrders);

  return (
    <div>
      <h2>Awating response from ecommerce:</h2>
      {awaitingOrders.map((order) => (
        <Card key={order._id} order={order} />
      ))}
    </div>
  );
};

export default AwaitingEcommResponse;
