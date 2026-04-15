import React from "react";

const BlurCircle = ({
  top = "auto",
  bottom = "auto",
  right = "auto",
  left = "auto",
}) => {
  return (
    <div
      className="absolute z-0 h-64 w-64 rounded-full bg-red-400/30 blur-3xl pointer-events-none"
      style={{ top, bottom, right, left }}
    ></div>
  );
};

export default BlurCircle;