import React, { Fragment, useState } from "react";

const SelectCatagories = ({ input, catagoryClass, selectedType }) => {
  const [resourse, setResourse] = useState("misc");

  return (
    <Fragment>
      <label className={catagoryClass}>Catagory</label>
      <div className={`four wide field ${catagoryClass}`}>
        <select
          {...input}
          name="catagory"
          component="select"
          value={resourse}
          className={`ui fluid dropdown input-item${
            selectedType === "exp" ? "__red" : ""
          }`}
          onChangeCapture={e => setResourse(e.target.value)}
        >
          <option value="misc">Misc & Checks</option>
          <option value="home">Home & Utilities</option>
          <option value="transport">Transportation</option>
          <option value="groceries">Groceries</option>
          <option value="insurance">Insurance</option>
          <option value="dining">Restaurants and Dining</option>
          <option value="entertainment">Entertainment</option>
        </select>
      </div>
    </Fragment>
  );
};

export default SelectCatagories;
