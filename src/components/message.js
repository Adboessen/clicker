import React, { useState } from "react";

const Message = (props) => {
  return (
    <div className="Message">
      <h1>Clicks: {props.message}</h1>
    </div>
  );
};

export default Message;
