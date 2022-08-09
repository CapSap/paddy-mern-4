import TodoCard from "./TodoCard";

const Todos = (props) => {
  // props contains store and AllOrders from app.js

  const orderTodos = props.orders.filter((order) => {
    return order.orderedItems.some((item) => item.sendingStore === props.store);
  });

  return (
    <div>
      <h3 className="font-bold">Todos for {props.store}</h3>
      {orderTodos.map((order) => (
        <TodoCard key={order._id} order={order} store={props.store} />
      ))}
    </div>
  );
};

export default Todos;
