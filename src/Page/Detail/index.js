import * as React from "react";
import styled from "@emotion/styled/macro";
import { useNavigate } from "react-router-dom";

// hooks
import useQuery from "../../Hooks/useQuery";

const Index = () => {
  const { query, state } = useQuery();
  const navigate = useNavigate();

  const [countryState, setCountryState] = React.useState("");
  const [detail, setDetail] = React.useState({});

  React.useEffect(() => {
    const country = query.get("country");

    if (!country) navigate("/");

    setCountryState(country);
  }, [navigate, query]);

  React.useEffect(() => {
    if (state.data) {
      const data = [...state.data];
      const result = data.find((item) => item.name.common === countryState);
      setDetail(result);
    } else {
    }
  }, [countryState, state]);

  return <Container id="Container-detail">{detail?.name?.common}</Container>;
};

export const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
`;

export default Index;
