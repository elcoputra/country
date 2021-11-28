/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import lodash from "lodash";

// API
import searchCountriesV3, { searchCountriesV2 } from "../Api/searchCountry";
import searchCallingCodes from "../Api/searchCallingCode";

const controller = new AbortController();

const useSearch = () => {
  const [searchVal, setSearchVal] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [searchResult, setSearchResult] = React.useState({
    error: true,
    status: "loading",
    data: [],
  });

  const searchQuery = async (val) => {
    setLoading(true);
    controller.abort();
    const result = await searchCountriesV3(val, controller);
    setSearchResult({ ...result, status: "fetched" });
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

export const useSearchCallingCode = () => {
  const [loading, setLoading] = React.useState(false);
  const [country, setCountry] = React.useState(null);
  const [searchResultCallCode, setSearchResultCallCode] = React.useState({
    error: true,
    data: {
      code: null,
      countries: [],
    },
  });

  const searchQuery = async (val) => {
    setLoading(true);
    const result = await searchCountriesV2(val);
    if (!result.error) {
      setSearchResultCallCode((prev) => ({
        ...prev,
        data: { ...prev.data, code: result.data.callingCodes },
      }));
      const resultSimilar = await searchCallingCodes(
        result?.data[0]?.callingCodes[0]
      );
      if (!resultSimilar.error && resultSimilar?.data?.length) {
        setSearchResultCallCode((prev) => ({
          ...prev,
          data: {
            ...prev.data,
            countries: resultSimilar?.data?.map((item) => item.name),
          },
        }));
      }
    }
    setLoading(false);
  };

  React.useEffect(() => {
    if (country) {
      searchQuery(country);
    }
  }, [country]);

  return { loadingSearchCode: loading, searchResultCallCode, setCountry };
};

export const useSearchCurrency = () => {
  const [loading, setLoading] = React.useState(false);
  const [currency, setCurrency] = React.useState(null);
  const [searchResultCurrency, setSearchResultCurrency] = React.useState({
    error: true,
    data: {
      currency: null,
      countries: [],
    },
  });

  const searchQuery = async (val) => {
    setLoading(true);
    const result = await searchCountriesV2(val);
    if (!result.error) {
      setSearchResultCurrency((prev) => ({
        ...prev,
        error: false,
        data: {
          currency: currency,
          countries: result.data.map((item) => item.name),
        },
      }));
    }
    setLoading(false);
  };

  React.useEffect(() => {
    if (currency) {
      searchQuery(currency);
    }
  }, [currency]);

  return { loadingSearchCurrency: loading, searchResultCurrency, setCurrency };
};

export default useSearch;
