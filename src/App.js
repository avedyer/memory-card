import './App.css';
import characters from './components/characters.js';
import Table from './components/table.js'
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <Header />
      <Table characters={characters}/>
    </div>
  );
}

export default App;
