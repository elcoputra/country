/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import styled from "@emotion/styled/macro";
import { useNavigate } from "react-router-dom";

// hooks
import useQuery from "../../../Hooks/useQuery";
import { useSearchCallingCode } from "../../../Hooks/useSearch";
import useSearchResult from "../../../Hooks/useSearch";

// Atoms
import BackButtonAtom from "../../Atoms/Button/BackButton";

// Organisms
import DetailTitleOrganism from "../../Organisms/Detail/DetailTitle";
import DetailCardsOrganism from "../../Organisms/Detail/DetailCards";

const Index = () => {
  const { query, state } = useQuery();
  const navigate = useNavigate();

  const { handleChange, searchResult, loading } = useSearchResult();
  const { setCountry, loadingSearchCode, searchResultCallCode } =
    useSearchCallingCode();

  const [countryState, setCountryState] = React.useState("");
  const [detail, setDetail] = React.useState({});

  React.useEffect(() => {
    const country = query.get("country");

    if (!country) navigate("/");

    setCountryState(country);
    setCountry(country);
  }, [navigate, query, setCountry]);

  React.useEffect(() => {
    if (state?.data) {
      const data = [...state.data];
      const result = data.find((item) => item.name.common === countryState);
      setDetail(result);
    } else {
      handleChange(countryState);
    }
  }, [countryState, state]);

  React.useEffect(() => {
    if (searchResult.error && searchResult.status === "fetched") {
      navigate("/");
    } else {
      if (searchResult.data.length) setDetail(searchResult.data[0]);
    }
  }, [navigate, searchResult]);

  if (loading) return <div>Loading</div>;
  if (!detail) return <div>No Data</div>;
  return (
    <Container id="Container-detail">
      <BackButtonAtom />
      <DetailTitleOrganism
        title={`${detail?.name?.common} ${detail?.flag}`}
        chipMap={detail?.altSpellings}
      />
      <DetailCardsOrganism
        data={detail}
        loadingSearchCallCode={loadingSearchCode}
        searchResultCallCode={searchResultCallCode}
        loadingSearchCurrency={loadingSearchCode}
        searchResultCurrency={searchResultCallCode}
      />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding-top: 90px;
  max-width: 1440px;
  width: 90%;
  padding-bottom: 200px;
`;

export default Index;
