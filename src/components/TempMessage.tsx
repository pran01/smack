import React, { useState } from "react";
import MessageToolbar from "./MessageToolbar";

const TempMessage = () => {
  const [toolbarVisible, setToolbarVisible] = useState(false);
  return (
    <section
      className="w-4/5"
      onMouseOver={() => setToolbarVisible(true)}
      onMouseLeave={() => setToolbarVisible(false)}>
      <div className="relative w-full h-20 bg-bg-light hover:bg-fg-gray">
        {toolbarVisible && <MessageToolbar />}
      </div>
    </section>
  );
};

export default TempMessage;
