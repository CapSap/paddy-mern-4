import { useState } from "react";
import IssueCard from "./IssueCard";

const Issues = ({ orders }) => {
  // issues needs to pass down each order as props to each issuecard.

  // so run this funciton:
  // orders.map(order => <ISSUECARD order={order} />)

  const data = orders.map((order) => (
    <IssueCard order={order} key={order.id} />
  ));

  return (
    <div>
      {orders.length ? (
        <table className="table-auto border w-full text-center">
          <thead className="bg-gray-100">
            <tr>
              <th>Date</th>
              <th>Order</th>
              <th>Customer Name</th>
              <th>Order Status</th>
              <th>Four Hour?</th>
              <th>Collection Store</th>
              <th>Sending Store</th>
              <th>Notes</th>
              <th>Items</th>
              <th>IBT</th>
              <th>Tracking</th>
            </tr>
          </thead>

          <tbody>{data}</tbody>
        </table>
      ) : (
        <p>No orders found with any issues</p>
      )}
    </div>
  );
};

export default Issues;
