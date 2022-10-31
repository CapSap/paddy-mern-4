import OrderCard from "./OrderCard";

const Dashboard = ({ orders, filterBy }) => {
  console.log(orders);

  function onArchiveClick(e) {}

  const data = orders.map((order) => (
    <>
      <OrderCard />
    </>
  ));

  return data;
};

export default Dashboard;
