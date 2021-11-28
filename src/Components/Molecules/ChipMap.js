import React from "react";

import ChipAtom from "../../Components/Atoms/Chip";

const ChipMap = ({ data }) => {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        {data?.map((item, index) => (
          <ChipAtom text={item} />
        ))}
      </div>
    </>
  );
};

export default ChipMap;
