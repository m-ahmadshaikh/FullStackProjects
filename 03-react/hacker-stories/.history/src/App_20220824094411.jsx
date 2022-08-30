import './App.css';

// const title = 'React';

// const newN = list.map((item) => (
//   <li>{item.id}</li>
// ));
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
        {list.map((item) => <li key={item.objectID}>{item.title}</li>)}
      </ul>
      <hr />
    </div>
  );
}

export default App;
