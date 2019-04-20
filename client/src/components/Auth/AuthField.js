import React from "react";

const AuthField = ({ meta, input }) => {
  const alertError = meta.error && meta.submitFailed;
  const { name } = input;
  const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <div className={`field ${alertError ? "ui error" : ""}`}>
      <label>
        {nameCapitalized}
        <i
          style={{
            visibility: alertError ? "visible" : "hidden",
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

export default AuthField;
