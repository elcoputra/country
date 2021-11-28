import React from "react";
import lodash from "lodash";

// API
import searchCountries from "../Api/searchCountry";

const useSearch = () => {
  const [searchVal, setSearchVal] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [searchResult, setSearchResult] = React.useState({
    error: true,
    data: [],
  });

  const searchQuery = async (val) => {
    setLoading(true);
    const result = await searchCountries(val);
    setSearchResult(result);
    setLoading(false);
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

  return { handleChange, searchVal, searchResult, loading };
};

export default useSearch;
