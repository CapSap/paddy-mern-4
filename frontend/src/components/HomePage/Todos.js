import TodoCard from "./TodoCard";

const Todos = (props) => {
  return (
    <div>
      {props.orders.length > 0 ? (
        <>
          <h3 className="font-bold">Todos for {props.store}</h3>
          {props.orders.map((order) => (
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
