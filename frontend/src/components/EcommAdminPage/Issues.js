import { useState } from "react";
import IssueCard from "./IssueCard";

const Issues = ({ orders }) => {
  // issues needs to pass down each order as props to each issuecard.

  return orders.map((order) => {
    return order.orderedItems
      .filter((request) => request.requestStatus === "issue")
      .map((filteredRequest) => {
        return (
          <IssueCard
            filteredRequest={filteredRequest}
            order={order}
            key={order.id}
          />
        );
      });
  });
};

export default Issues;
