import { useState } from "react";
import IssueCard from "./IssueCard";

const Issues = ({ orders }) => {
  // issues needs to pass down each order as props to each issuecard.

  return (
    <div>
      {orders.map((order) => (
        <IssueCard order={order} key={order.id} />
      ))}
    </div>
  );
};

export default Issues;
