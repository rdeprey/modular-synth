import logo from './logo.svg';
import './App.css';
import TriangleWaveform from './Components/TriangleWaveform';
import { Button } from './Components/Button';

function App() {
  return (
    <div className="App">
      <Button><TriangleWaveform /></Button>
    </div>
  );
}

export default App;
