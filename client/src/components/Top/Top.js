import "./Top.css";
import React from "react";
import BudgetDisplay from "./BudgetDisplay";

class Top extends React.Component {
  render() {
    return (
      <div className="top">
        <BudgetDisplay />
      </div>
    );
  }
}

export default Top;
