import React from "react";
import { useState } from "react";
import "./BG-Change.css";

const Color = () => {
  let purple = "purple";
  let Show = "Click Me 😍";
  const [bg, Setbg] = useState(purple);
  const [name, setName] = useState(Show);

  const Change = () => {
    Setbg("red");
    setName("Ouch!!! 😉");
  };

  const ChangeBg = () => {
    Setbg("skyblue");
    setName("Ayyo 😠");
  };

  return (
    <div id="Container" style={{ backgroundColor: bg }}>
      <button
        onClick={Change}
        onDoubleClick={ChangeBg}
        style={{ backgroundColor: "greenyellow" }}
      >
        {name}
      </button>
    </div>
  );
};

export default Color;
