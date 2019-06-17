import React from "react";

const renderYearOptions = (type, from, to) => {
  const years = [];
  const year = new Date().getFullYear();

  for (let i = 0; i < 50; i++) {
    years[i] = year - i;

    if (type === "to" && i === year - from.year) {
      i = 50;
    }
  }

  return years.map((el, i) => {
    return <option key={i}>{el}</option>;
  });
};

export default renderYearOptions;
