import React from "react";

const RadioPersistItem = ({ onPersistChange }) => {
  return (
    <div className="two wide field" style={{ margin: "1em 0" }}>
      <label style={{ display: "block" }} className="checkbox-label">
        Monthly:
      </label>
      <input name="persist" className="checkbox" type="checkbox" />
    </div>
  );
};

export default RadioPersistItem;
