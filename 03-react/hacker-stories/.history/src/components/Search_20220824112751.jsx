import React from 'react';

function Search() {
  const [searchTerm, setSearchTerm] = React.useState(0);
  function handleChange(event) {
    setSearchTerm(event.target.value);
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

export default Search;
