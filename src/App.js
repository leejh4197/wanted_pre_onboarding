import './App.css';
import Toggle from './components/Toggle/Toggle';
import Tab from './components/Tab/Tab';
import Slider from './components/Slider/Slider';
import Input from './components/Input/Input';
import Dropdown from './components/Dropdown/Dropdown';



function App() {
  return (
    <div className="App">
      <h1>Toggle</h1>
      <Toggle/>
      <h1>Tab</h1>
      <Tab/>
      <h1>Slider</h1>
      <Slider/>
      <h1>Input</h1>
      <Input/>
      <h1>Dropdown</h1>
      <Dropdown/>
    </div>
  );
}

export default App;
