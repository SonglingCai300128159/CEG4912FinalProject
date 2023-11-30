import './App.css';
import TITLE from "./components/Title";
import CAMERA_MAIN from './components/camera_main';
import WATER_MAIN from './components/water_main';
import ENVIRONMENT_MAIN from './components/environment_main';
import BATTERY_MAIN from './components/battery_main';
import FUNCTION_BAR from './components/function_bar';
import homeicon from './components/Assets/icons8-shield-64.png'
/*import { Button } from 'react-bootstrap';*/
import { DataProvider } from './components/DataContext';
import Switch from './pages/switch'
function App() {
  
  return (
    <DataProvider>
      <div className="app">
        <header className="title">
          <TITLE />
        </header>
        <section className="content">
          <section className="Function_Bar">
            <FUNCTION_BAR />
          </section>
          <section className="Battery_Main">
            <BATTERY_MAIN />
          </section>
          <section className="Water_Main">
            <WATER_MAIN />
          </section>
          <section className="Environment_Main">
            <ENVIRONMENT_MAIN />
          </section>
          
        </section>
      </div>
    </DataProvider>
    
  );
}

export default App;