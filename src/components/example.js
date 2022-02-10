import React, { useState } from "react";
import Click from "./click";
import Message from "./message";

const Example = (props) => {
  const [Clicks, setClicks] = useState(0);

  return (
    <div className="Container">
      <Message message={Clicks} />
      <Click onClick={() => setClicks(Clicks + 1)} />
    </div>
  );
};

export default Example;
