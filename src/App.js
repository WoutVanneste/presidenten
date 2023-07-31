import background from './assets/background.jpg';
import './App.css';
import PlayerDeck from './components/player-deck/PlayerDeck';

function App() {
  return (
    <div className='app' style={{backgroundImage: `url(${background})`}}>
      <PlayerDeck />
    </div>
  );
}

export default App;
