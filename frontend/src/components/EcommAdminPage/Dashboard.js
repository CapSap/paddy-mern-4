import OrderCard from "./OrderCard";

const Dashboard = ({ orders, filterBy }) => {
  const filteredOrder = orders.filter((order) =>
    order.orderedItems.some((request) =>
      request.requestStatus.includes(filterBy)
    )
  );

  return filteredOrder.length > 1 ? (
    filteredOrder.map((order) => <OrderCard order={order} key={order._id} />)
  ) : (
    <>There are no orders that have a request status of {filterBy}</>
  );
};

export default Dashboard;
