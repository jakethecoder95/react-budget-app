import React from "react";

const AuthField = ({ meta, input, displayLabel }) => {
  const alertError = meta.error && meta.submitFailed;
  const { name } = input;
  const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <div className={`field ${alertError ? "ui error" : ""}`}>
      <label>
        {displayLabel && nameCapitalized}
        <i
          style={{
            display: alertError ? "inline" : "none",
            marginLeft: "15px"
          }}
        >
          {meta.error}
        </i>
      </label>
      <input
        placeholder={nameCapitalized}
        type={name === "password" ? name : "text"}
        {...input}
      />
    </div>
  );
};

AuthField.defaultProps = {
  displayLabel: true
};

export default AuthField;
