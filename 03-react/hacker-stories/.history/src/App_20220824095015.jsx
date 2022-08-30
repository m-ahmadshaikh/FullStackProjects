import './App.css';

// const title = 'React';

// eslint-disable-next-line no-unused-vars
const list = [
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
function List() {
  return list.map((item) => (
    <li key={item.objectID}>
      <span>
        <a href={item.url}>{item.title}</a>
      </span>
      <span>{item.author}</span>
      <span>{item.num_comments}</span>
      <span>{item.points}</span>
    </li>
  ));
}
function App() {
  return (
    <div>
      <h1>
        My Hacker Stories
      </h1>
      <label htmlFor="search">
        <input id="search" type="text" />
        Search:
        {' '}
      </label>
      <ul>
        <List>
      </ul>
      <hr />
    </div>
  );
}

export default App;
