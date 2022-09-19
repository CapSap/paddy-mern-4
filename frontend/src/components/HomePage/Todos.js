import TodoCard from "./TodoCard";

const Todos = (props) => {
  // props contains store and AllOrders from app.js

  const orderTodos = props.orders.filter((order) => {
    return order.orderedItems.some((item) => item.sendingStore === props.store);
  });

  return (
    <div>
      {orderTodos.length > 0 ? (
        <>
          <h3 className="font-bold">Todos for {props.store}</h3>
          {orderTodos.map((order) => (
            <TodoCard
              key={order._id}
              order={order}
              store={props.store}
              updater={props.updater}
            />
          ))}
        </>
      ) : (
        <h3 className="font-bold text-green-600">
          There are no new outstanding todos for you
        </h3>
      )}
    </div>
  );
};

export default Todos;
