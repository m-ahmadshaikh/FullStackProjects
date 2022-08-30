import './App.css';

// const title = 'React';
const welcome = {
  greetings: 'Hey',
  title: 'React',

};
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
function getTitle(title) {
  return title;
}
function App() {
  return (
    <div>
      <h1>
        {welcome.greetings }
        {' '}
        {getTitle('React')}
      </h1>
      <label htmlFor="search">
        <input id="search" type="text" />
        Search:
        {' '}
      </label>

    </div>
  );
}

export default App;
