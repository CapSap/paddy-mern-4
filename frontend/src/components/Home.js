import Incoming from "./Incoming";
import StoreChooser from "./StoreChooser";
import Todos from "./Todos";

const Home = ({ store, orders, setStore }) => {
  return (
    <>
      <StoreChooser store={store} setStore={setStore} />
      <Todos store={store} orders={orders} />
      <Incoming store={store} orders={orders} />
    </>
  );
};

export default Home;
