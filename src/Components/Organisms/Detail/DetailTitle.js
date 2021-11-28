import React from "react";

// atoms
import TitleBoldAtom from "../../Atoms/Title";

// Molecules
import ChipMapMolecules from "../../../Components/Molecules/ChipMap";

const DetailTitle = ({ title, chipMap }) => {
  return (
    <>
      <TitleBoldAtom
        size={72}
        mobileSize={40}
        text={<p style={{ marginBottom: 0 }}>{title}</p>}
        width="auto"
        style={{ fontWeight: 700, marginTop: 50, marginBottom: 0 }}
      />

      <div style={{ display: "flex", flexDirection: "row" }}>
        <ChipMapMolecules data={chipMap} />
      </div>
    </>
  );
};

export default DetailTitle;
