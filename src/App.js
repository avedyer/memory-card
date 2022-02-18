import './App.css';
import characters from './components/characters.js';
import Table from './components/table.js'

function App() {
  return (
    <div className="App">
      <Table characters={characters}/>
    </div>
  );
}

export default App;
