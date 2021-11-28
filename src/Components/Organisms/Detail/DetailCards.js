import React from "react";
import styled from "@emotion/styled/macro";

// Molecules
import CardLatLongMolecules from "../../Molecules/CardLatLong";
import CardDetailedListMolecules from "../../Molecules/CardDetailList";
import CardFlat from "../../Molecules/CardFlat";
import List from "../../Atoms/List";

const DetailCards = ({
  data,
  loadingSearchCallCode = true,
  searchResultCallCode = [],
  loadingSearchCurrency = true,
  searchResultCurrency = [],
}) => {
  const [currency, setCurrency] = React.useState("");

  React.useEffect(() => {
    let keys = [];
    for (const key in data?.currencies) {
      keys.push(key);
    }
    setCurrency(keys.join(", "));
  }, [data?.currencies]);

  return (
    <>
      <ContainerCard style={{ display: "flex", flexDirection: "row" }}>
        <CardLatLongMolecules data={data} />
        <CardDetailedListMolecules
          dataMap={[
            { key: "capital", value: data?.capital?.join(", ") },
            { key: "region", value: data?.region },
            { key: "subregion", value: data?.subregion },
          ]}
        />
      </ContainerCard>
      <ContainerCard style={{ display: "flex", flexDirection: "row" }}>
        <CardFlat
          id="phoneCode"
          title="Calling Code"
          content={60}
          infoTooltip={`${searchResultCallCode?.data?.countries?.length} countries`}
          info="with this calling code"
          tooltipChild={() => (
            <List data={searchResultCallCode?.data?.countries} />
          )}
        />
        <CardFlat
          id="currency"
          title="Currency"
          content={currency}
          infoTooltip={`${searchResultCallCode?.data?.countries?.length} countries`}
          info="with this currency"
          tooltipChild={() => (
            <List data={searchResultCurrency?.data?.countries} />
          )}
        />
      </ContainerCard>
    </>
  );
};

const ContainerCard = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 1200px) {
    flex-direction: column !important;
  }
`;

export default DetailCards;
