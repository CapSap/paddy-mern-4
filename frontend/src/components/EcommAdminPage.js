import Dashboard from "./Dashboard";

const EcommAdminPage = ({ orders }) => {
  return (
    <div>
      <p>
        a table that holds all the info a person needs to: accept IBTS, follow
        up.{" "}
      </p>
      <br />
      <p>Orders waiting for IBT</p>
      <Dashboard orders={orders} filter={"Request created"} />

      <br />
      <p>orders ready for ibt acceptace</p>

      <Dashboard orders={orders} filter={"Issue"} />
    </div>
  );
};

export default EcommAdminPage;
