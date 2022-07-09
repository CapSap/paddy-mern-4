import Card from "./Card";

const Incoming = (props) => {
  const filteredOrders = props.orders.filter(
    (order) => order.pickupLocation === props.store
  );

  return (
    // why does below need to be a table?
    // maybe try cards?
    // what is the goal?
    // easy for people to read and use.
    // responsive ie fit those stupid narrow screens?
    // i think cards would be better.
    // so how to display the data?

    <div className="flex-1">
      <h3 className="font-bold">
        Incoming Orders / Awaiting customer pickup for the {props.store} store
      </h3>
      {filteredOrders.map((order) => (
        <Card key={order._id} order={order} />
      ))}
    </div>
  );
};

export default Incoming;
