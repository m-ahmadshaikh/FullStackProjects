import React from 'react';
import PropTypes from 'prop-types';

function Search({ onSearch }) {
  const [searchTerm, setSearchTerm] = React.useState('');
  function handleChange(event) {
    setSearchTerm(event.target.value);
    onSearch(event);
  }
  return (
    <div>
      <label htmlFor="search">
        <input id="search" type="text" onChange={handleChange} />
        Search:
        {' '}
      </label>
      <p>
        {searchTerm}
      </p>
    </div>
  );
}
Search.propTypes = {
  onSearch: PropTypes.func,
};
Search.def

export default Search;
