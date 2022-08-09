import Dashboard from "./Dashboard";

const EcommAdminPage = ({ orders }) => {
  return (
    <div>
      <p>
        a table that holds all the info a person needs to: accept IBTS, follow
        up.{" "}
      </p>
      <br />

      {/* orders should only have status: request created, STORENAME has an issue,  */}

      <p>Orders waiting for Action from stores</p>
      <Dashboard orders={orders} filterBy={"Request created"} />

      <br />
      {/* <p>orders ready for ibt acceptace</p> */}

      <Dashboard orders={orders} filterBy={"issue"} />
    </div>
  );
};

export default EcommAdminPage;
