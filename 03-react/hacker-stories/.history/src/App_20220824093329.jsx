import './App.css';

const title = 'React';
const welcome = {
  greetings: 'hello',
  title: 'React',

};
function App() {
  return (
    <div>
      <h1>{welcome.greetings}</h1>
      <label htmlFor="search">
        <input id="search" type="text" />
        Search:
        {' '}
      </label>

    </div>
  );
}

export default App;
