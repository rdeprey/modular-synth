import './App.css';
import TriangleWaveform from './Components/TriangleWaveform';
import SquareWaveform from './Components/SquareWaveform';
import { Button } from './Components/Button';

function App() {
  return (
    <div className="App">
      <Button><TriangleWaveform /></Button>
      <Button><SquareWaveform /></Button>
    </div>
  );
}

export default App;
