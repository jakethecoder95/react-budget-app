import React from "react";

import months from "../../../../Util/months";

const renderMonthsOptions = (type, from, to) => {
  let start = 0; // Start slicing the months array
  let end = 12; // end slicing months array

  if (type === "to" && parseInt(from.year) === parseInt(to.year)) {
    start = from.month;
  }
  if (
    (type === "to" && parseInt(to.year) === new Date().getFullYear()) ||
    (type === "from" && parseInt(from.year) === new Date().getFullYear())
  ) {
    end = new Date().getMonth() + 1;
  }

  return months.slice(start, end).map((el, i) => {
    return <option key={i}>{el}</option>;
  });
};

export default renderMonthsOptions;
