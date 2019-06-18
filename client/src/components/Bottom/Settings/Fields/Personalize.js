import React from "react";

import months from "../../../Util/months";
import renderMonthsOptions from "./util/renderMonthsOptions";
import renderYearOptions from "./util/renderYearOptions";

const now = new Date();
const currentMonth = now.getMonth();

const Personalize = ({ from, to, setTo, setFrom }) => {
  if (from.year > to.year) {
    setTo({ ...to, year: from.year });
  }
  if (from.year === to.year && from.month > to.month) {
    setTo({ ...to, month: from.month });
  }

  from.month = !from.month && from.month !== 0 ? currentMonth : from.month;
  to.month = !to.month && to.month !== 0 ? currentMonth : to.month;

  from.year = !from.year ? now.getFullYear().toString() : from.year;
  to.year = !to.year ? now.getFullYear().toString() : to.year;

  return (
    <div className="ui grid">
      <div className="eight wide column">
        <h4
          className="ui dividing header center"
          style={{ textAlign: "center" }}
        >
          From
        </h4>
        <div className="ui inline fields">
          <div className="field">
            <label>Month</label>
            <select
              value={months[from.month]}
              onChange={e =>
                setFrom({ ...from, month: months.indexOf(e.target.value) })
              }
            >
              {renderMonthsOptions("from", from, to)}
            </select>
          </div>
          <div className="field">
            <label>Year</label>
            <select
              value={from.year}
              onChange={e => setFrom({ ...from, year: e.target.value })}
            >
              {renderYearOptions("from", from, to)}
            </select>
          </div>
        </div>
      </div>
      <div className="eight wide column">
        <h4 className="ui dividing header" style={{ textAlign: "center" }}>
          To
        </h4>
        <div className="ui inline fields">
          <div className="field">
            <label>Month</label>
            <select
              value={months[to.month]}
              onChange={e =>
                setTo({ ...to, month: months.indexOf(e.target.value) })
              }
            >
              {renderMonthsOptions("to", from, to)}
            </select>
          </div>
          <div className="field">
            <label>Year</label>
            <select
              value={to.year}
              onChange={e => setTo({ ...to, year: e.target.value })}
            >
              {renderYearOptions("to", from, to)}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personalize;
