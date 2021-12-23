import React from 'react';

function useFinder(state) {
  const [query, setQuery] = React.useState('');
  const [filteredState, setFilterState] = React.useState(state);

  React.useMemo(() => {
    const result = state.filter((item) => {
      return item.rankName.toLowerCase().includes(query.toLowerCase().trim());
    });
    setFilterState(result);
  }, [query]);

  return {
    query,
    setQuery,
    filteredState,
  };
};

export default useFinder;
