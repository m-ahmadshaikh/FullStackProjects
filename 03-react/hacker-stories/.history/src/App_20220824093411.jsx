import './App.css';

// const title = 'React';
const welcome = {
  greetings: 'Hey',
  title: 'React',

};
function App() {
  return (
    <div>
      <h1>
        {welcome.greetings}
        {' '}
        {welcome.title}
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
