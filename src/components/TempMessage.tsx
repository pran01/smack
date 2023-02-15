import React, { useState } from "react";
import MessageToolbar from "./MessageToolbar";

const TempMessage = () => {
  const [toolbarVisible, setToolbarVisible] = useState(false);
  return (
    <div
      className="relative w-full h-20 bg-bg-light hover:bg-fg-gray"
      onMouseOver={() => setToolbarVisible(!toolbarVisible)}
      onMouseOut={() => setToolbarVisible(!toolbarVisible)}>
      {toolbarVisible && <MessageToolbar />}
    </div>
  );
};

export default TempMessage;
