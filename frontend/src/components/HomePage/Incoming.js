import Card from "./Card";

const Incoming = (props) => {
  const filteredOrders = props.orders.filter(
    (order) => order.pickupLocation === props.store
  );

  return (
    <div className="flex-1">
      {filteredOrders.length ? (
        <>
          <h3 className="font-bold">
            Incoming Orders / Awaiting customer pickup for the {props.store}{" "}
            store
          </h3>
          {filteredOrders.map((order) => (
            <Card key={order._id} order={order} />
          ))}
        </>
      ) : (
        <h3 className="font-bold text-green-600">No orders incoming</h3>
      )}
    </div>
  );
};

export default Incoming;
