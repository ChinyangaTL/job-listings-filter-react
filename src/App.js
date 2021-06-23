import React, { useState, useEffect } from 'react';
import data from './assets/data.json';

import Listing from './components/Listing';
import Header from './components/Header';
import FilterArea from './components/FilterArea';

function App() {
  const [listings, setListings] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    setListings(data);
  }, []);

  const filterFunction = ({ role, level, tools, languages }) => {
    if (filters.length === 0) return true;

    const tags = [role, level];

    if (tools) tags.push(...tools);
    if (languages) tags.push(...languages);

    // return tags.filter((tag) => filters.includes(tag));

    return filters.every((filter) => tags.includes(filter));

    // return tags.every((tag) => filters.includes(tag));
  };

  const removeFilter = (filter) => {
    setFilters(filters.filter((f) => f !== filter));
  };

  const removeFilters = () => {
    setFilters([]);
  };

  const handleTagClick = (tag) => {
    if (filters.includes(tag)) return;
    setFilters([...filters, tag]);
  };

  const filtered = listings.filter(filterFunction);

  return (
    <div className="App">
      <Header />

      {filters.length > 0 && (
        <>
          <FilterArea
            filters={filters}
            removeFilter={removeFilter}
            removeFilters={removeFilters}
          />
        </>
      )}

      {filtered.map((listing) => {
        return (
          <Listing
            key={listing.id}
            listing={listing}
            handleClick={handleTagClick}
          />
        );
      })}
    </div>
  );
}

export default App;
