import React from "react";
import ReactTooltip from "react-tooltip";

const ToolTip = ({ children, id }) => {
  return (
    <ReactTooltip id={id} place="bottom" arrowColor="transparent" backgroundColor="#525252">
      <div
        style={{ minWidth: 200, borderRadius: 10}}
      >
        {children}
      </div>
    </ReactTooltip>
  );
};

export default ToolTip;
