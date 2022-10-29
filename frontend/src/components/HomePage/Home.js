import AwaitingEcommResponse from "./AwaitingEcommResponse";
import Incoming from "./Incoming";
import StoreChooser from "./StoreChooser";
import Todos from "./Todos";

const Home = ({ store, orders, setStore, updater }) => {
  return (
    <>
      <StoreChooser store={store} setStore={setStore} />
      {store ? (
        <>
          <Todos store={store} orders={orders} updater={updater} />
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
