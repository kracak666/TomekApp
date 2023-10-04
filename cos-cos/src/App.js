import Game_grid from './Game_grid';
import Main_block from './Main_block';
import Base_block from './Base_block';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>
          BlockShufeller
        </h1>
      </header>
      <main style={{display: 'flex',justifyContent:'center',alignContent:'center'}}>
        <Game_grid/>
      </main>
    </div>
  );
}

export default App;
