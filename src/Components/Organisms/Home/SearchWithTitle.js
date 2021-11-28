import React from "react";
import { useNavigate } from "react-router-dom";

// Atom
import TitleBoldAtom from "../../Atoms/Title/index";
import SearchInputAtom from "../../Atoms/Input";

import SearchSuggestion from "../../Molecules/SearchSugestion";

const SearchWithTitle = ({
  handleChange,
  searchResult,
  searchVal,
  loading,
}) => {
  const navigate = useNavigate();
  const refSearch = React.useRef(null);

  const [searchPosition, setSearchPosition] = React.useState(null);

  React.useEffect(() => {
    setSearchPosition(refSearch.current.getBoundingClientRect());
  }, [refSearch]);

  const handleKeyDown = (e) => {
    if (searchResult?.data?.length && e.key === "Enter") {
      navigate(`/detail?country=${searchResult.data[0].name.common}`, {
        state: searchResult,
      });
    }
  };

  return (
    <>
      <TitleBoldAtom
        size={72}
        text="Country"
        width={294}
        style={{ marginTop: 263, marginBottom: 43, fontWeight: 700 }}
      />
      <SearchInputAtom
        innerRef={refSearch}
        onKeyDown={handleKeyDown}
        autoFocus
        handleChange={handleChange}
        id={"text-search"}
        type="text"
        name="search-input"
        width={700}
        height={60}
        icon="search"
        placeholder="Type any country name"
      />
      <SearchSuggestion
        searchPosition={searchPosition}
        searchResult={searchResult}
        searchVal={searchVal}
        loading={loading}
      />
    </>
  );
};

export default SearchWithTitle;
