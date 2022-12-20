import fakeDB2 from "../../../fakeDB2";
import Dashboard from "./Dashboard";
import Issues from "./Issues";

const EcommAdminPage = ({ orders }) => {
  const ordersWithIssues = orders.filter((order) =>
    order.orderedItems.some((request) =>
      request.requestStatus.includes("Issue")
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
      <Issues orders={ordersWithIssues} filterBy={"Issue"} />
      <br />

      <p>Orders awaiting store action</p>
      <Dashboard orders={orders} filterBy={"created"} />

      <br />

      <p>Orders ready for ibt accept</p>
      <Dashboard orders={orders} filterBy={"posted"} />
      <br />

      {/* maybe the below should be a link to its own page.  */}

      <p>All orders</p>
      <Dashboard orders={orders} filterBy={""} />

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
