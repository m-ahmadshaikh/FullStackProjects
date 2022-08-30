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
const newN = list.map((item) => (
  <li key="">
    <ol>
      <li>{item.title}</li>
      <li>{item.url}</li>
      <li>{item.author}</li>
    </ol>

  </li>
));
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
        {newN}
      </ul>
      <hr />
    </div>
  );
}

export default App;
