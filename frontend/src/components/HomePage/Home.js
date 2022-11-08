import AwaitingEcommResponse from "./AwaitingEcommResponse";
import Incoming from "./Incoming";
import StoreChooser from "./StoreChooser";
import Todos from "./Todos";

const Home = ({ store, orders, setStore, updater }) => {
  const fourHourcnc = orders.filter((order) =>
    order.orderedItems.some((request) => request.sendingStore === store)
  );

  const postingToOtherstores = orders.filter((order) => order.orderedItems);

  return (
    <>
      <StoreChooser store={store} setStore={setStore} />
      {store ? (
        <>
          <Todos store={store} orders={orders} />
          <p>printed/in progress todos</p>
          <Todos store={store} orders={fourHourcnc} />
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
