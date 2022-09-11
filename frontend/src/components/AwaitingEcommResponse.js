import Card from "./Card";

const AwaitingEcommResponse = ({ store, orders }) => {
  const awaitingOrders = orders.filter((order) => {
    return order.orderedItems.some((item) => {
      return item.sendingStore === store && item.message;
    });
  });

  return (
    <div>
      {awaitingOrders.length ? (
        <>
          <h3 className="font-bold">Awating response from ecommerce:</h3>

          {awaitingOrders.map((order) => (
            <Card key={order._id} order={order} />
          ))}
        </>
      ) : (
        <h3 className="font-bold text-green-600">
          No orders with issues awaiting ecomm response
        </h3>
      )}
    </div>
  );
};

export default AwaitingEcommResponse;
