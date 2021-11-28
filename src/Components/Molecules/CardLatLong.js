import React from "react";

import TitleBoldAtom from "../Atoms/Title";
import CardAtom from "../Atoms/Card";

const CardLatLong = ({ data }) => {
  return (
    <CardAtom withBackground withCardShadow>
      <TitleBoldAtom
        size={18}
        text="LatLong"
        width="auto"
        style={{ fontWeight: 700, marginBottom: 11 }}
      />
      {data?.latlng?.length && (
        <TitleBoldAtom
          size={48}
          text={`${data.latlng[0]}, ${data.latlng[1]}`}
          width="auto"
          color="#8362F2"
          style={{ fontWeight: 700, marginBottom: 11 }}
        />
      )}
    </CardAtom>
  );
};

export default CardLatLong;
