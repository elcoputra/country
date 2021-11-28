import * as React from "react";
import { TextB } from "./style";

function Index({ size = 24, text = "title", style }) {
  return (
    <>
      <TextB size={size} style={style}>
        {text}
      </TextB>
    </>
  );
}

export default Index;
