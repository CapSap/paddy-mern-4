import Card from "./Card";

const Incoming = (props) => {
  console.log(props.orders);

  const filteredOrders = props.orders.filter((x) => x.pickupLocation === "Syd");

  return (
    // why does below need to be a table?
    // maybe try cards?
    // what is the goal?
    // easy for people to read and use.
    // responsive ie fit those stupid narrow screens?
    // i think cards would be better.
    // so how to display the data?

    <div className="flex-1">
      <h3>Incoming Orders / Awaiting customer pickup</h3>
      {filteredOrders.map((x) => (
        <Card key={x._id} order={x} />
      ))}
    </div>
  );
};

export default Incoming;
