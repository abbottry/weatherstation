import React from 'react';
import './search.css';

const Search = ({ onSubmit, searching }) => {
  const placeholder = 'Search for a city';

  return (
    <form className="searchForm" action="#" onSubmit={e => onSubmit(e)}>
      <input
        placeholder={placeholder}
        name="searchString"
        type="search"
        required
      />
      <button type="submit" className={searching ? 'searching' : ''}>
        <span className="fas fa-search fa-2x" />
        <span className="fas fa-sync fa-2x" />
      </button>
    </form>
  );
};

export default Search;
