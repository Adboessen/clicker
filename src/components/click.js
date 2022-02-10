import React, { useState } from "react";

const Click = (props) => {
  return (
    <div className="Button">
      <button onClick={props.onClick}>Click Me</button>
    </div>
  );
};
export default Click;
