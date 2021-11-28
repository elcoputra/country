import React from "react";

const Chip = ({ text }) => {
  return (
    <div
      style={{
        backgroundColor: "#8DD4CC",
        color: "white",
        borderRadius: 50,
        width: "max-content",
        padding: "5px 14px 6px 12px",
        marginRight: 5,
      }}
    >
      {text}
    </div>
  );
};

export default Chip;
