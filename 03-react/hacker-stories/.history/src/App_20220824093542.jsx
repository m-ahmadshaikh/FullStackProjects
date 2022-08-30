import './App.css';

// const title = 'React';
const welcome = {
  greetings: 'Hey',
  title: 'React',

};
function getTitle(title) {
  return title;
}
function App() {
  return (
    <div>
      <h1>
        {welcome.greetings }

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
