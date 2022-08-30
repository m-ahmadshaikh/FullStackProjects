import './App.css';
import PropTypes from 'prop-types';
// const title = 'React';

// eslint-disable-next-line no-unused-vars
// const list = [
//   {
//     title: 'React',
//     url: 'https://reactjs.org/',
//     author: 'Jordan Walke',
//     num_comments: 3,
//     points: 4,
//     objectID: 0,
//   },
//   {
//     title: 'Redux',
//     url: 'https://redux.js.org/',
//     author: 'Dan Abramov, Andrew Clark',
//     num_comments: 2,
//     points: 5,
//     objectID: 1,
//   },
// ];
function Item({ key, item }) {
  return (<li key={item.objectID}>
    <span>
      <a href={item.url}>{item.title}</a>
    </span>
    <span>{item.author}</span>
    <span>{item.num_comments}</span>
    <span>{item.points}</span>
  </li>);
}
function List({ list }) {
  return (
    <ul>
      {list.map((item) => (
        <Item item={item} />
      ))}
    </ul>
  );
}
List.propTypes = { list: PropTypes.shape([]) };
List.defaultProps = {
  list: [],
};
function Search() {
  function handleChange(event) {
    console.log(event.target.value);
  }
  return (
    <label htmlFor="search">
      <input id="search" type="text" onChange={handleChange} />
      Search:
      {' '}
    </label>
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
