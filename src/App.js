import './App.css';
import TITLE from "./components/Title";
import CAMERA_MAIN from './components/camera_main';
import WATER_MAIN from './components/water_main';
import WATER_MAIN2 from './components/water_main2';
import WATER_MAIN3 from './components/water_main3';
import ENVIRONMENT_MAIN from './components/environment_main';
import DETECT_MAIN from './components/detect_main';
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
          <div className="Function_Bar">
            <FUNCTION_BAR />
          </div>
          <div className='main_content'>
            <div className='water_content'>
              <section className="Water_Main">
                <WATER_MAIN />
              </section>
              <section className="Water_Main">
                <WATER_MAIN2 />
              </section>
              <section className="Water_Main">
                <WATER_MAIN3 />
              </section>
            </div>
            <div className='lower_main'>
              <section className="Environment_Main">
                <ENVIRONMENT_MAIN />
              </section>
              <section className="Battery_Main">
                <BATTERY_MAIN />
              </section>
              <section className="Detect_Main">
                <DETECT_MAIN />
              </section>
            </div>
          </div>
        </section>
      </div>
    </DataProvider>
    
  );
}

export default App;