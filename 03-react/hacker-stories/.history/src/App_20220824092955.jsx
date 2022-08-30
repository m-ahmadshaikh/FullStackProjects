import './App.css';

const title = 'React';
function App() {
  return (
    <div>
      <h1>{title}</h1>
      <label htmlFor=""></label>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
    </div>
  );
}

export default App;
