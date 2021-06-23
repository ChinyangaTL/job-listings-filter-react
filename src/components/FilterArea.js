import React from 'react';

const FilterArea = ({ removeFilter, removeFilters, filters }) => {
  return (
    <>
      <div className="bg-white flex flex-col md:flex-row md:items-center py-6 px-4 pt-12 md:p-6 shadow-lg rounded-md mb-16 md:my-6 relative">
        {filters.map((filter) => (
          <span
            className="tablet tablet--remove"
            onClick={() => removeFilter(filter)}
          >
            {filter}
          </span>
        ))}
        <button className="ml-auto hover:text-red-600" onClick={removeFilters}>
          Clear
        </button>
      </div>
    </>
  );
};

export default FilterArea;
