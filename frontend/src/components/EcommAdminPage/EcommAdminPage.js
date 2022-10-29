import fakeDB2 from "../../../fakeDB2";
import Dashboard from "./Dashboard";
import Issues from "./Issues";

const EcommAdminPage = ({ orders }) => {
  const ordersWithIssues = orders.filter((order) =>
    order.orderedItems.some((request) =>
      request.requestStatus.includes("issue")
    )
  );

  return (
    <div>
      <p>
        a table that holds all the info a person needs to: accept IBTS, follow
        up.{" "}
      </p>
      <br />
      <p>Orders with issue from store (OOS or other)</p>
      <Issues orders={ordersWithIssues} filterBy={"issue"} />
      <br />

      {/* orders should only have status: request created, STORENAME has an issue,  */}

      {/* <p>
        Orders waiting for Action from stores (fufil order or respond to
        message)
      </p>
      <Dashboard orders={orders} filterBy={"Request created"} />

      <br />

      <p>Orders ready for ibt accept</p>
      <Dashboard orders={orders} filterBy={"posting"} />
      <br /> */}

      {/* maybe the below should be a link to its own page.  */}

      {/* <p>All orders</p>
      <Dashboard orders={orders} filterBy={""} />

      <br />
      <br />
      <br />
      <br />
      <br />

      <p>Fake orders</p>
      <Dashboard orders={fakeDB2} filterBy={""} /> */}
    </div>
  );
};

export default EcommAdminPage;
