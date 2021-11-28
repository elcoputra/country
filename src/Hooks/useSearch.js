import React from "react";
import lodash from "lodash";

// API
import searchCountries from "../Api/searchCountry";

const useSearch = () => {
  const [searchVal, setSearchVal] = React.useState("");
  const [searchResult, setSearchResult] = React.useState({
    error: true,
    data: [],
  });

  const searchQuery = async (val) => {
    const result = await searchCountries(val);
    setSearchResult(result);
  };

  const handleChange = React.useCallback(
    lodash.debounce(async (val) => setSearchVal(val), 200),
    []
  );

  React.useEffect(() => {
    if (searchVal) {
      searchQuery(searchVal);
    } else {
      setSearchResult((prev) => ({ ...prev, error: true }));
    }
  }, [searchVal]);

  return { handleChange, searchVal, searchResult };
};

export default useSearch;
