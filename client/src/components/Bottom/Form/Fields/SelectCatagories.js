import React, { Fragment } from "react";

const SelectCatagories = props => {
  const { input, selectedType } = props;

  return (
    <Fragment>
      <label>Catagory</label>
      <div className={`four wide field`}>
        <select
          {...input}
          name="catagory"
          className={`ui fluid dropdown input-item${
            selectedType === "exp" ? "__red" : ""
          }`}
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
