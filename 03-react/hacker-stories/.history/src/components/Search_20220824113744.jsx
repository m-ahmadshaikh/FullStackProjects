import React from 'react';

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
Search.propsType = {

};

export default Search;
