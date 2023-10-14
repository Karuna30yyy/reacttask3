
import './App.css';
import ColorPicker from './Colorpicker';

export function App() {
  return (
    <div className='App'>
      <ColorPicker colors={["red","blue","green","yellow","purple","orange"]} />
    </div>
  );
}

export default App;

