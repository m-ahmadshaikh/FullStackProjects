import './App.css';
import PropTypes from 'prop-types';
import React from 'react';

function List({ list }) {
  return (
    <ul>
      {list.map((item) => (
        <Item item={item} key={item.objectID} />
      ))}
    </ul>
  );
}
List.propTypes = { list: PropTypes.shape([]) };
List.defaultProps = {
  list: [],
};
function Search() {
  const [searchTerm, setSearchTerm] = React.useState('');
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
function App() {
  const stories = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];
  return (
    <div>
      <h1>
        My Hacker Stories
      </h1>
      <Search />
      <List list={stories} />

      <hr />
    </div>
  );
}

export default App;
