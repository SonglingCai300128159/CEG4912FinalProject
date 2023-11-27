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
        <button></button>
      </header>
      <section className="content">
        <section className='sideBar'>
          <article className="Function_Bar">
            <div>
              <FUNCTION_BAR />
            </div>
          </article>
        </section>
        
        <section className='all_components'>
          <article className="Battery_Main">
            <div >
              <BATTERY_MAIN />
            </div>
          </article>
          
          <article className="Water_Main">
            <div >
              <WATER_MAIN />
            </div>
          </article>
          <article className="Environment_Main">
            <div>
              <ENVIRONMENT_MAIN />
            </div>
          </article>
        </section>
        
      </section>
      </div>
    </DataProvider>
    
  );
}

export default App;