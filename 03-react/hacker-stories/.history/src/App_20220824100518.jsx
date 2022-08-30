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
function Item(props) {
  return (
    <li key={props.item.objectID}>
      <span>
        <a href={props.item.url}>{item.title}</a>
      </span>
      <span>{props.author}</span>
      <span>{props.num_comments}</span>
      <span>{props.points}</span>
    </li>
  );
}
function List() {
  return (
    <ul>
      {list.map((item) => {
        return (
          <Item {...item} />
        );
      })}
    </ul>
  );
}
function Search() {
  return (
    <label htmlFor="search">
      <input id="search" type="text" />
      Search:
      {' '}
    </label>
  );
}
function App() {
  return (
    <div>
      <h1>
        My Hacker Stories
      </h1>
      <Search />

      <List />

      <List />
      <List />
      <List />
      <List />

      <hr />
    </div>
  );
}

export default App;
