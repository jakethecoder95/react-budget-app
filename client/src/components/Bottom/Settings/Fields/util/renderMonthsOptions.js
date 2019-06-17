import React from "react";

import months from "../../../../Util/months";

const renderMonthsOptions = (type, from, to) => {
  let start = 0; // Start slicing the months array

  if (type === "to" && parseInt(from.year) === parseInt(to.year)) {
    start = from.month;
  }

  return months.slice(start, 12).map((el, i) => {
    return <option key={i}>{el}</option>;
  });
};

export default renderMonthsOptions;
