import Card from "./Card";

const Todos = (props) => {
  // get the orders and filter.
  // if order.items.map(itemInfo =>
  //   itemInfo.sendingStore === props.store then display info.)

  console.log(props.orders);

  const orderTodos = props.orders.filter((order) => {
    return order.orderedItems.some((item) => {
      return item.sendingStore === props.store;
    });
  });

  return (
    <div>
      <h3 className="font-bold">Todos for {props.store}</h3>
      {orderTodos.map((order) => (
        <Card key={order._id} order={order} />
      ))}
    </div>
  );
};

export default Todos;
