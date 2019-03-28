import "./Percentage.css";
import React from "react";

const Percentage = ({ value, total, hidden }) => {
  value = value ? value : 0;
  total = total ? total : 0;
  const percent = Math.round((value / total) * 100);
  const hide = hidden === true ? "hidden" : "auto";

  return (
    <div className="item__percentage" style={{ visibility: hide }}>
      {percent && percent !== Infinity ? `${percent}%` : "---"}
    </div>
  );
};

export default Percentage;
