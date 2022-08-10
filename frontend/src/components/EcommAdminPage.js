import fakeDB2 from "../../fakeDB2";
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
      <p>Orders with issue from store (OOS)</p>
      <Dashboard orders={orders} filterBy={"issue"} />

      <br />

      <p>Orders ready for ibt accept</p>
      <Dashboard orders={orders} filterBy={""} />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <p>Fake orders</p>
      <Dashboard orders={fakeDB2} filterBy={""} />
    </div>
  );
};

export default EcommAdminPage;
