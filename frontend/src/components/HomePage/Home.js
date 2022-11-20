import AwaitingEcommResponse from "./AwaitingEcommResponse";
import Incoming from "./Incoming";
import StoreChooser from "./StoreChooser";
import Todos from "./Todos";

const Home = ({ store, orders, setStore, updater }) => {
  const orderTodos = orders.filter((order) => {
    return order.orderedItems.some(
      (item) => item.sendingStore === store && item.requestStatus == "created"
    );
  });

  const fourHourTodos = orderTodos.filter(
    (order) => order.pickupLocation === store
  );

  const notFourHour = orderTodos.filter(
    (order) => order.pickupLocation !== store
  );

  return (
    <>
      <StoreChooser store={store} setStore={setStore} />
      {store ? (
        <>
          <h3 className="font-bold">Four hour todos</h3>

          <Todos store={store} orders={fourHourTodos} updater={updater} />
          <h3 className="font-bold">All other todos</h3>

          <Todos store={store} orders={notFourHour} updater={updater} />
          <AwaitingEcommResponse store={store} orders={orders} />
          <Incoming store={store} orders={orders} />
        </>
      ) : (
        <h3 className="font-bold text-blue-600">Please select a store</h3>
      )}
    </>
  );
};

export default Home;
