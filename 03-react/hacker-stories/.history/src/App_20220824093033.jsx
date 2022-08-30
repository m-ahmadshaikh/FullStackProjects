import './App.css';

const title = 'React';
function App() {
  return (
    <div>
      <h1>{title}</h1>
      <label htmlFor="search">
        <input id="search" type="text" />
        Search
      </label>

    </div>
  );
}

export default App;
