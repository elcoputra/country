import React from "react";
import { useLocation } from "react-router-dom";

const useQuery = () => {
  const { search, state } = useLocation();

  return {
    query: React.useMemo(() => new URLSearchParams(search), [search]),
    state: state,
  };
};

export default useQuery;
