import React from "react";

const SelectCatagories = ({ input, meta, catagoryClass }) => {
  return (
    <div className={`four wide field ${catagoryClass}`}>
      <select name="catagory" component="select">
        <option value="misc">Misc & Checks</option>
        <option value="home">Home & Utilities</option>
        <option value="transport">Transportation</option>
        <option value="groceries">Groceries</option>
        <option value="insurance">Insurance</option>
        <option value="dining">Restaurants and Dining</option>
        <option value="entertainment">Entertainment</option>
      </select>
    </div>
  );
};

export default SelectCatagories;
