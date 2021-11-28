import * as React from "react";
import styled from "@emotion/styled/macro";
import { useNavigate } from "react-router-dom";

// Hooks
import useQuery from "../../Hooks/useQuery";

const Index = () => {
  const query = useQuery();
  const navigate = useNavigate();

  const [countryState, setCountryState] = React.useState("");

  React.useEffect(() => {
    const country = query.get("country");

    if (!country) navigate("/");

    setCountryState(country);
  }, [navigate, query]);

  return <Container id="Container-detail">{countryState}</Container>;
};

export const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
`;

export default Index;
