import React from "react";

import CardAtom from "../Atoms/Card";
import TitleBoldAtom from "../Atoms/Title";
import Tooltip from "../Atoms/ToolTip";

const CardFlat = ({
  data,
  dataMap,
  tooltipChild: TooltipChild,
  id,
  title,
  content,
  infoTooltip,
  info,
}) => {
  const spanRef = React.useRef(null);

  return (
    <CardAtom>
      <TitleBoldAtom
        size={18}
        text={title}
        width="auto"
        style={{ fontWeight: 700, marginBottom: 11 }}
      />
      <TitleBoldAtom
        size={48}
        text={content}
        width="auto"
        color="#8362F2"
        style={{ fontWeight: 700, marginBottom: 11 }}
      />
      <p>
        <span
          data-tip
          data-for={id + "tooltip"}
          ref={spanRef}
          style={{
            textDecoration: "underline",
            color: "#8362F2",
            cursor: "pointer",
          }}
        >
          {infoTooltip}{" "}
        </span>
        {info}
      </p>
      <Tooltip id={id + "tooltip"}>
        <TooltipChild />
      </Tooltip>
    </CardAtom>
  );
};

export default CardFlat;
