import React from "react";

const Loading = ({ message }) => {
  return (
    <div className="ui active inverted dimmer">
      <div className="ui text loader">{message ? message : "Loading"}</div>
    </div>
  );
};

export default Loading;
